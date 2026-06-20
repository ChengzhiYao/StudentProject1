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
        <span>📲 全屏使用：点底部 <b>分享 ⬆️</b> → <b>添加到主屏幕</b></span>
      ) : (
        <>
          <span>📲 添加到主屏幕，全屏使用</span>
          <button className="install-go" onClick={install}>安装</button>
        </>
      )}
      <button className="install-x" onClick={() => setShow(false)} aria-label="close">✕</button>
    </div>
  )
}
