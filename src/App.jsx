import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase.js'
import Login from './screens/Login.jsx'
import Signup from './screens/Signup.jsx'
import EmailVerification from './screens/EmailVerification.jsx'
import Onboarding from './screens/Onboarding.jsx'
import Home from './screens/Home.jsx'
import Difficulty from './screens/Difficulty.jsx'
import LevelDetail from './screens/LevelDetail.jsx'
import Quiz from './screens/MiniGame.jsx'
import Profile from './screens/Profile.jsx'
import TabBar from './screens/TabBar.jsx'

const EMPTY = { novice: [], mediocre: [], advanced: [] }

export default function App() {
  const [screen, setScreen] = useState('login')
  const [user, setUser] = useState(null)
  const [progress, setProgress] = useState(EMPTY)
  const [diffId, setDiffId] = useState(null)
  const [levelIdx, setLevelIdx] = useState(0)
  const [authMsg, setAuthMsg] = useState('')

  // ---- Supabase session handling ----
  useEffect(() => {
    if (!supabase) return
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) loadSignedIn(data.session.user)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) loadSignedIn(session.user)
    })
    return () => sub.subscription.unsubscribe()
  }, [])

  async function loadSignedIn(authUser) {
    const meta = authUser.user_metadata || {}
    const base = {
      id: authUser.id,
      email: authUser.email,
      username: meta.username || (authUser.email || 'rower').split('@')[0],
      fullName: meta.full_name || '',
    }
    setUser(base)
    setScreen('home')
    try {
      const { data } = await supabase
        .from('profiles')
        .select('username, full_name, progress')
        .eq('id', authUser.id)
        .single()
      if (data) {
        setUser((p) => ({ ...p, username: data.username || p.username, fullName: data.full_name || p.fullName }))
        if (data.progress) setProgress({ ...EMPTY, ...data.progress })
      }
    } catch (e) { /* table may not exist yet — ignore */ }
  }

  // ---- auth actions ----
  async function handleLogin(email, password) {
    setAuthMsg('')
    if (!supabase) { setUser({ email, username: 'Rower', fullName: 'New Rower' }); setScreen('home'); return }
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setAuthMsg(error.message)
  }

  async function handleGoogle() {
    if (!supabase) { handleLogin('google@novrow.app'); return }
    setAuthMsg('')
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    })
    if (error) setAuthMsg(error.message)
  }

  async function handleSignup(data) {
    setAuthMsg('')
    if (!supabase) { setUser({ email: data.email, username: data.username, fullName: data.fullName }); setScreen('verify'); return }
    const { data: res, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: { data: { username: data.username, full_name: data.fullName } },
    })
    if (error) { setAuthMsg(error.message); return }
    if (!res.session) { setUser({ email: data.email }); setScreen('verify') } // needs email confirmation
  }

  async function logout() {
    if (supabase) await supabase.auth.signOut()
    setUser(null)
    setProgress(EMPTY)
    setScreen('login')
  }

  function updateUser(patch) {
    setUser((u) => ({ ...u, ...patch }))
    if (supabase && user?.id) {
      supabase.from('profiles').update({ username: patch.username, full_name: patch.fullName }).eq('id', user.id)
    }
  }

  function openDifficulty(id) { setDiffId(id); setScreen('difficulty') }
  function openLevel(idx) { setLevelIdx(idx); setScreen('level') }

  function completeLevel() {
    setProgress((p) => {
      const done = p[diffId].includes(levelIdx) ? p[diffId] : [...p[diffId], levelIdx]
      const np = { ...p, [diffId]: done }
      if (supabase && user?.id) supabase.from('profiles').update({ progress: np }).eq('id', user.id)
      return np
    })
    setScreen('difficulty')
  }

  const showTabs = ['home', 'difficulty', 'profile'].includes(screen)
  const activeTab = screen === 'profile' ? 'profile' : 'home'

  return (
    <div className="phone">
      <div className="screen">
        {screen === 'login' && (
          <Login onLogin={handleLogin} onGoogle={handleGoogle} goSignup={() => setScreen('signup')} error={authMsg} />
        )}
        {screen === 'signup' && (
          <Signup onSignup={handleSignup} onCancel={() => setScreen('login')} error={authMsg} />
        )}
        {screen === 'verify' && (
          <EmailVerification email={user?.email} onDone={() => setScreen('login')} />
        )}
        {screen === 'onboarding' && <Onboarding onPick={() => setScreen('home')} />}

        {screen === 'home' && (
          <Home onPick={openDifficulty} onLogout={logout} progress={progress} />
        )}
        {screen === 'difficulty' && (
          <Difficulty
            diffId={diffId}
            progress={progress[diffId]}
            onPickLevel={openLevel}
            onLogout={logout}
            onBack={() => setScreen('home')}
          />
        )}
        {screen === 'level' && (
          <LevelDetail
            diffId={diffId}
            levelIdx={levelIdx}
            onNext={() => setScreen('quiz')}
            onBack={() => setScreen('difficulty')}
          />
        )}
        {screen === 'quiz' && (
          <Quiz
            diffId={diffId}
            levelIdx={levelIdx}
            onPass={completeLevel}
            onBack={() => setScreen('level')}
          />
        )}
        {screen === 'profile' && (
          <Profile user={user} progress={progress} onLogout={logout} onDelete={logout} onUpdate={updateUser} />
        )}
      </div>

      {showTabs && (
        <TabBar
          active={activeTab}
          onHome={() => setScreen('home')}
          onProfile={() => setScreen('profile')}
        />
      )}
    </div>
  )
}
