import { DIFFICULTIES } from '../data/lessons.js'
import BoatWithOars from './BoatWithOars.jsx'

export default function Home({ onPick, onLogout }) {
  return (
    <div className="home">
      <button className="logout-btn" onClick={onLogout}>LOG OUT</button>

      <div className="boat-list">
        {DIFFICULTIES.map((d, i) => (
          <div
            key={d.id}
            className={'boat-choice ' + (i % 2 === 0 ? 'pos-left' : 'pos-right')}
            onClick={() => onPick(d.id)}
          >
            <div className="boat-wrap">
              <BoatWithOars />
            </div>
            <div className="boat-label">{d.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
