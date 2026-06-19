import { DIFFICULTIES } from '../data/lessons.js'

// 4 vertical rows (each holds a left + right oar) as % of the boat height
const ROWS = ['27%', '40%', '53%', '66%']

export default function Difficulty({ diffId, progress = [], onPickLevel, onLogout }) {
  const diff = DIFFICULTIES.find((d) => d.id === diffId)
  const isUnlocked = (idx) => idx === 0 || progress.includes(idx - 1)

  // Levels 1..8 -> index 0..7. Odd numbers on the right, even on the left.
  const oars = []
  for (let n = 1; n <= 8; n++) {
    const idx = n - 1
    oars.push({
      n,
      idx,
      right: n % 2 === 1,
      row: ROWS[Math.floor((n - 1) / 2)],
      unlocked: isUnlocked(idx),
      done: progress.includes(idx),
    })
  }

  return (
    <div className="diff">
      <div className="diff-title">{diff?.name}</div>
      <button className="logout-btn diff-logout" onClick={onLogout}>LOG OUT</button>

      <div className="boat-stage">
        <div className="bwo diff-bwo">
          <img className="bwo-hull" src="/boat.png" alt="boat" />

          {oars.map((o) => {
            const sidePos = o.right ? { left: '42%' } : { right: '42%' }
            const labelPos = o.right ? { left: '64%' } : { right: '64%' }
            const open = () => o.unlocked && onPickLevel(o.idx)
            return (
              <span key={o.n}>
                <span
                  className={'level-tag' + (o.unlocked ? '' : ' locked')}
                  style={{ top: `calc(${o.row} + 25px)`, ...labelPos }}
                  onClick={open}
                >
                  Level {o.n}
                  {o.done ? ' ✓' : o.unlocked ? '' : ' 🔒'}
                </span>
                <img
                  src="/oar2.png"
                  alt={`Level ${o.n}`}
                  className={'hoar ' + (o.right ? 'right' : 'left') + (o.unlocked ? '' : ' locked')}
                  style={{ top: o.row, ...sidePos }}
                  onClick={open}
                />
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
