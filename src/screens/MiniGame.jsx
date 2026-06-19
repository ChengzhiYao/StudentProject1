import { useState, useRef, useEffect } from 'react'
import { GAMES, NUM_LABELS } from '../data/lessons.js'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function Shell({ title, prompt, children, onBack }) {
  return (
    <div className="quiz scroll">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h1>{title} — Mini Game</h1>
      <div className="quiz-progress">{prompt}</div>
      <div className="quiz-card">{children}</div>
    </div>
  )
}

function Result({ onPass }) {
  return (
    <div className="quiz">
      <div className="result">
        <div className="badge">🏅</div>
        <h2>Level Complete!</h2>
        <p>Nice work — you earned this badge.</p>
        <button className="btn-primary" onClick={onPass}>Claim Badge</button>
      </div>
    </div>
  )
}

function TryAgain({ score, total, onRetry }) {
  return (
    <div className="quiz">
      <div className="result">
        <div className="badge">😅</div>
        <h2>Almost!</h2>
        <p>You got {score} of {total}. Give it another go.</p>
        <button className="btn-primary" onClick={onRetry}>Try Again</button>
      </div>
    </div>
  )
}

/* CONNECT — tap a word on the left, then its match on the right */
function ConnectGame({ game, title, onBack, onPass }) {
  const [left] = useState(() => shuffle(game.pairs.map((p, i) => ({ t: p[0], id: i }))))
  const [right] = useState(() => shuffle(game.pairs.map((p, i) => ({ t: p[1], id: i }))))
  const [sel, setSel] = useState(null)
  const [matched, setMatched] = useState([])
  const [wrong, setWrong] = useState(null)

  function tapRight(id) {
    if (matched.includes(id) || sel == null) return
    if (id === sel) { setMatched([...matched, id]); setSel(null) }
    else { setWrong(id); setSel(null); setTimeout(() => setWrong((w) => (w === id ? null : w)), 400) }
  }

  if (matched.length === game.pairs.length) return <Result onPass={onPass} />

  return (
    <Shell title={title} prompt={game.prompt} onBack={onBack}>
      <p className="game-hint">Tap a word, then its match ({matched.length}/{game.pairs.length})</p>
      <div className="connect-cols">
        <div className="connect-col">
          {left.map((o) => {
            let cls = 'connect-item'
            if (matched.includes(o.id)) cls += ' done'
            else if (sel === o.id) cls += ' sel'
            return <div key={o.id} className={cls} onClick={() => !matched.includes(o.id) && setSel(o.id)}>{o.t}</div>
          })}
        </div>
        <div className="connect-col">
          {right.map((o) => {
            let cls = 'connect-item'
            if (matched.includes(o.id)) cls += ' done'
            if (wrong === o.id) cls += ' wrong'
            return <div key={o.id} className={cls} onClick={() => tapRight(o.id)}>{o.t}</div>
          })}
        </div>
      </div>
    </Shell>
  )
}

/* SPOT — tap all the mistakes */
function SpotGame({ game, title, onBack, onPass }) {
  const [items] = useState(() => shuffle(game.items.map((it, i) => ({ ...it, i }))))
  const [found, setFound] = useState([])
  const [wrong, setWrong] = useState(null)
  const badCount = game.items.filter((it) => it.bad).length

  function tap(it) {
    if (found.includes(it.i)) return
    if (it.bad) setFound([...found, it.i])
    else { setWrong(it.i); setTimeout(() => setWrong((w) => (w === it.i ? null : w)), 400) }
  }

  if (found.length === badCount) return <Result onPass={onPass} />

  return (
    <Shell title={title} prompt={game.prompt} onBack={onBack}>
      <p className="game-hint">Find the mistakes ({found.length}/{badCount})</p>
      {items.map((it) => {
        let cls = 'spot-item'
        if (found.includes(it.i)) cls += ' found'
        if (wrong === it.i) cls += ' wrong'
        return (
          <div key={it.i} className={cls} onClick={() => tap(it)}>
            {found.includes(it.i) && <span className="spot-x">✗</span>}{it.t}
          </div>
        )
      })}
    </Shell>
  )
}

/* ORDER — tap the steps in the correct order */
function OrderGame({ game, title, onBack, onPass }) {
  const [shuffled] = useState(() => shuffle(game.steps.map((t, i) => ({ t, i }))))
  const [placed, setPlaced] = useState([])
  const [wrong, setWrong] = useState(null)

  function tap(item) {
    if (placed.includes(item.i)) return
    if (item.i === placed.length) setPlaced([...placed, item.i])
    else { setWrong(item.i); setTimeout(() => setWrong((w) => (w === item.i ? null : w)), 450) }
  }

  if (placed.length === game.steps.length) return <Result onPass={onPass} />

  return (
    <Shell title={title} prompt={game.prompt} onBack={onBack}>
      <p className="game-hint">Tap the steps in order ({placed.length}/{game.steps.length})</p>
      {shuffled.map((item) => {
        const order = placed.indexOf(item.i)
        let cls = 'order-item'
        if (order !== -1) cls += ' placed'
        if (wrong === item.i) cls += ' wrong'
        return (
          <div key={item.i} className={cls} onClick={() => tap(item)}>
            {order !== -1 && <span className="order-num">{order + 1}</span>}{item.t}
          </div>
        )
      })}
    </Shell>
  )
}

/* TIMING — tap when the moving marker is in the green zone */
function TimingGame({ game, title, onBack, onPass }) {
  const need = game.hits || 3
  const markerRef = useRef(null)
  const posRef = useRef(6)
  const dirRef = useRef(1)
  const rafRef = useRef(0)
  const [hits, setHits] = useState(0)
  const [flash, setFlash] = useState(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let last = performance.now()
    const speed = 65 // % per second
    function loop(now) {
      const dt = Math.min((now - last) / 1000, 0.05); last = now
      posRef.current += dirRef.current * speed * dt
      if (posRef.current >= 90) { posRef.current = 90; dirRef.current = -1 }
      if (posRef.current <= 6) { posRef.current = 6; dirRef.current = 1 }
      if (markerRef.current) markerRef.current.style.left = posRef.current + '%'
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  function tap() {
    if (done) return
    const p = posRef.current
    if (p >= 42 && p <= 58) {
      const h = hits + 1
      setHits(h); setFlash('hit'); setTimeout(() => setFlash(null), 250)
      if (h >= need) { cancelAnimationFrame(rafRef.current); setDone(true) }
    } else {
      setFlash('miss'); setTimeout(() => setFlash(null), 250)
    }
  }

  if (done) return <Result onPass={onPass} />

  return (
    <Shell title={title} prompt={game.prompt} onBack={onBack}>
      <p className="game-hint">Hits {hits} / {need}</p>
      <div className="timing-track">
        <div className="timing-zone" />
        <div className="timing-marker" ref={markerRef} />
      </div>
      <button className={'tap-btn' + (flash ? ' ' + flash : '')} onClick={tap}>TAP!</button>
    </Shell>
  )
}

/* MCQ — scored multiple choice; perfect score wins */
function McqGame({ game, title, onBack, onPass }) {
  const qs = game.questions
  const [qi, setQi] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const q = qs[qi]

  function pick(i) { if (picked === null) { setPicked(i); if (i === q.answer) setScore((s) => s + 1) } }
  function next() { if (qi + 1 < qs.length) { setQi(qi + 1); setPicked(null) } else setDone(true) }
  function retry() { setQi(0); setPicked(null); setScore(0); setDone(false) }

  if (done) return score === qs.length
    ? <Result onPass={onPass} />
    : <TryAgain score={score} total={qs.length} onRetry={retry} />

  return (
    <Shell title={title} prompt={`${game.prompt} · Q${qi + 1}/${qs.length} · Score ${score}`} onBack={onBack}>
      <div className="quiz-q">{q.q}</div>
      {q.options.map((opt, i) => {
        let cls = 'quiz-opt'
        if (picked !== null) { cls += ' disabled'; if (i === q.answer) cls += ' correct'; else if (i === picked) cls += ' wrong' }
        return <div key={i} className={cls} onClick={() => pick(i)}>{opt}</div>
      })}
      {picked !== null && (
        <button className="btn-primary" onClick={next}>{qi + 1 < qs.length ? 'Next Question' : 'See Result'}</button>
      )}
    </Shell>
  )
}

export default function MiniGame({ diffId, levelIdx, onPass, onBack }) {
  const game = (GAMES[diffId] && GAMES[diffId][levelIdx]) || null
  const title = NUM_LABELS[levelIdx][0].toUpperCase() + NUM_LABELS[levelIdx].slice(1)
  if (!game) return <Result onPass={onPass} />
  const props = { key: diffId + levelIdx, game, title, onPass, onBack }
  switch (game.type) {
    case 'connect': return <ConnectGame {...props} />
    case 'spot': return <SpotGame {...props} />
    case 'order': return <OrderGame {...props} />
    case 'timing': return <TimingGame {...props} />
    case 'mcq': return <McqGame {...props} />
    default: return <Result onPass={onPass} />
  }
}
