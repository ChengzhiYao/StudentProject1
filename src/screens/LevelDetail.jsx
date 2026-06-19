import { LESSONS, NUM_LABELS, VIDEOS } from '../data/lessons.js'

export default function LevelDetail({ diffId, levelIdx, onNext, onBack }) {
  const lesson = LESSONS[diffId][levelIdx]
  const numWord = NUM_LABELS[levelIdx].toUpperCase()

  const v = (VIDEOS[diffId] && VIDEOS[diffId][levelIdx]) || {}
  const ytUrl = v.id
    ? `https://www.youtube.com/watch?v=${v.id}`
    : `https://www.youtube.com/results?search_query=${encodeURIComponent(
        v.search || 'rowing ' + lesson.title
      )}`

  return (
    <div className="level scroll">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h1>Level {numWord}</h1>

      {v.id ? (
        <div className="video-box embed">
          <iframe
            className="yt"
            src={`https://www.youtube-nocookie.com/embed/${v.id}`}
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <a className="video-box placeholder" href={ytUrl} target="_blank" rel="noreferrer">
          <div className="clap">🎬</div>
          <div className="play-hint">▶ Watch tutorials on YouTube</div>
        </a>
      )}

      <div className="lesson-note">
        <strong>{lesson.title}</strong>
        <br />
        {lesson.summary}
      </div>

      <a className="view-video" href={ytUrl} target="_blank" rel="noreferrer">
        Click here to view video
      </a>

      <button className="next-btn" onClick={onNext}>Next</button>
    </div>
  )
}
