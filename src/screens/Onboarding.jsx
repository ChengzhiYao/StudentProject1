import { useState } from 'react'

const OPTIONS = [
  'Just curious',
  'I want to improve my skills',
  'I want to learn more about rowing',
  'I want to try a new hobby',
  'Someone referred me to this app',
]

export default function Onboarding({ onPick }) {
  const [sel, setSel] = useState(null)

  function choose(i) {
    setSel(i)
    setTimeout(onPick, 280) // brief highlight then continue
  }

  return (
    <div className="screen">
      <div className="onb-title">What brings you to this app?</div>
      <div className="onb-card">
        <p>Choose an answer below.</p>
        {OPTIONS.map((o, i) => (
          <div
            key={i}
            className={'onb-option' + (sel === i ? ' sel' : '')}
            onClick={() => choose(i)}
          >
            {o}
          </div>
        ))}
      </div>
    </div>
  )
}
