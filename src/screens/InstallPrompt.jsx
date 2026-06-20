import { useState, useEffect } from 'react'

export default function InstallPrompt() {
  const [deferred, setDeferred] = useState(null)
  const [show, setShow] = useState(false)
  const [ios, setIos] = useState(false)

  useEffect(() => {
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone
    if (standalone) return // already installed -> don't nag

    const isIos = /iphone|ipad|ipod/i.test(window.navigator.userAgent)
    if (isIos) { setIos(true); setShow(true); return }

    const handler = (e) => { e.preventDefault(); setDeferred(e); setShow(true) }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  if (!show) return null

  async function install() {
    if (!deferred) return
    deferred.prompt()
    await deferred.userChoice
    setDeferred(null)
    setShow(false)
  }

  return (
    <div className="install-banner">
      {ios ? (
        <span>📲 To install: tap <b>Share ⬆️</b> → <b>Add to Home Screen</b></span>
      ) : (
        <>
          <span>📲 Add NovRow to your home screen</span>
          <button className="install-go" onClick={install}>Install</button>
        </>
      )}
      <button className="install-x" onClick={() => setShow(false)} aria-label="close">✕</button>
    </div>
  )
}
