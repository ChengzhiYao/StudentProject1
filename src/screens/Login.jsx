import { useState } from 'react'

export default function Login({ onLogin, onGoogle, goSignup, error }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function submit(e) {
    e.preventDefault()
    onLogin(email, password)
  }

  return (
    <div className="screen auth-screen">
      <div className="auth-title">Welcome To<br />NovRow</div>
      <form className="auth-card" onSubmit={submit}>
        <h2>Login here</h2>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <div className="auth-error">{error}</div>}

        <button type="submit" className="btn-primary">Login</button>

        <div className="signup-row">
          <span>Don't have an account already?</span>
          <span className="link" onClick={goSignup}>sign up</span>
        </div>

        <div className="or">Or</div>

        <button type="button" className="google-btn" onClick={onGoogle}>
          <span className="g-logo">G</span>
          Continue with Google
        </button>
      </form>
    </div>
  )
}
