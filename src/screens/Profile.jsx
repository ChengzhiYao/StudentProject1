import { useState } from 'react'
import { NUM_LABELS, DIFFICULTIES } from '../data/lessons.js'

export default function Profile({ user, progress, onLogout, onDelete, onUpdate }) {
  const [tab, setTab] = useState('novice')
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({ username: '', email: '' })

  const earned = (progress && progress[tab]) || []

  function openEdit() {
    setForm({ username: user?.username || '', email: user?.email || '' })
    setEditing(true)
  }
  function save() {
    onUpdate({
      username: form.username.trim() || user?.username,
      email: form.email.trim() || user?.email,
    })
    setEditing(false)
  }

  return (
    <div className="profile scroll">
      <div className="small">My name</div>
      <div className="big">{user?.username || 'Username'}</div>
      <div className="small">My email</div>
      <div className="big">{user?.email || 'Email'}</div>

      <div className="badge-wall-title">⭐ Badge Wall ⭐</div>

      <div className="badge-tabs">
        {DIFFICULTIES.map((d) => (
          <button
            key={d.id}
            className={'badge-tab' + (tab === d.id ? ' active' : '')}
            onClick={() => setTab(d.id)}
          >
            {d.name}
          </button>
        ))}
      </div>

      <div className="badge-grid">
        {NUM_LABELS.map((word, i) => {
          const got = earned.includes(i)
          return (
            <div key={i} className={'badge' + (got ? '' : ' locked')}>
              <img src={`/badges/${tab}-${i + 1}.png`} alt={`Level ${word}`} />
            </div>
          )
        })}
      </div>

      <div className="profile-actions">
        <button onClick={openEdit}>Edit Account</button>
        <button onClick={onDelete}>Delete Account</button>
      </div>

      {editing && (
        <div className="modal-overlay" onClick={() => setEditing(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Edit Account</h3>
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                placeholder="Enter username..."
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter email..."
              />
            </div>
            <button className="btn-primary" onClick={save}>Save Changes</button>
            <button className="btn-outline" onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}
