export default function EmailVerification({ email, onDone }) {
  return (
    <div className="screen">
      <div className="auth-title">Welcome to<br />NovRow</div>

      <div className="verify-card">
        <h2>Check your email</h2>
        <div style={{ fontSize: 56, margin: '6px 0 16px' }}>📧</div>
        <p style={{ color: '#444', textAlign: 'center', maxWidth: 320, lineHeight: 1.5 }}>
          We sent a confirmation link to{' '}
          <strong>{email || 'your email'}</strong>. Open it to verify your account, then log in.
        </p>
        <button className="btn-primary" style={{ maxWidth: 320, marginTop: 18 }} onClick={onDone}>
          Back to Login
        </button>
      </div>
    </div>
  )
}
