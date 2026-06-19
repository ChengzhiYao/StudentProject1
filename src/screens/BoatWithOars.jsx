// A rowing shell (hull) with 4 pairs of oars sticking out.
// Used decoratively on the Home screen so each boat shows its oars.
export default function BoatWithOars({ height = '100%', dim = false }) {
  const rows = ['24%', '37%', '50%', '63%']
  return (
    <div className="bwo" style={{ height, opacity: dim ? 0.28 : 1 }}>
      <img className="bwo-hull" src="/boat.png" alt="" />
      {rows.map((r, i) => (
        <span key={i}>
          <img className="hoar right" src="/oar.png" alt="" style={{ top: r }} />
          <img className="hoar left" src="/oar.png" alt="" style={{ top: r }} />
        </span>
      ))}
    </div>
  )
}
