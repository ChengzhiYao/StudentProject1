import { useState } from 'react'

export default function Signup({ onSignup, onCancel, error }) {
  const [form, setForm] = useState({ email: '', password: '', username: '', fullName: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  function submit(e) {
    e.preventDefault()
    onSignup(form) // mock: anything works
  }

  return (
    <div className="screen auth-screen">
      <div className="auth-title">Welcome to<br />NovRow</div>
      <form className="auth-card" onSubmit={submit}>
        <h2>Signup here</h2>

        <div className="field">
          <label>Email</label>
          <input type="text" placeholder="Enter email..." value={form.email} onChange={set('email')} />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" placeholder="Enter password..." value={form.password} onChange={set('password')} />
        </div>
        <div className="field">
          <label>Username</label>
          <input type="text" placeholder="Enter username..." value={form.username} onChange={set('username')} />
        </div>
        <div className="field">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name..." value={form.fullName} onChange={set('fullName')} />
        </div>

        {error && <div className="auth-error">{error}</div>}

        <button type="submit" className="btn-primary">Signup</button>
        <button type="button" className="btn-outline" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  )
}
