import { useState } from 'react'
import { LESSONS, NUM_LABELS } from '../data/lessons.js'

export default function Quiz({ diffId, levelIdx, onPass, onBack }) {
  const lesson = LESSONS[diffId][levelIdx]
  const questions = lesson.quiz

  const [qi, setQi] = useState(0)
  const [picked, setPicked] = useState(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[qi]

  function pick(i) {
    if (picked !== null) return
    setPicked(i)
    if (i === q.answer) setCorrectCount((c) => c + 1)
  }

  function next() {
    if (qi + 1 < questions.length) {
      setQi(qi + 1)
      setPicked(null)
    } else {
      setDone(true)
    }
  }

  if (done) {
    const passed = correctCount >= Math.ceil(questions.length / 2)
    return (
      <div className="quiz">
        <div className="result">
          <div className="badge">{passed ? '🏅' : '😅'}</div>
          <h2>{passed ? 'Level Complete!' : 'Almost there!'}</h2>
          <p>
            You got {correctCount} of {questions.length} correct.
          </p>
          {passed ? (
            <button className="btn-primary" onClick={onPass}>Claim Badge</button>
          ) : (
            <button className="btn-primary" onClick={onBack}>Rewatch & Retry</button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="quiz scroll">
      <h1>{NUM_LABELS[levelIdx][0].toUpperCase() + NUM_LABELS[levelIdx].slice(1)} — Quiz</h1>
      <div className="quiz-progress">
        Question {qi + 1} of {questions.length}
      </div>

      <div className="quiz-card">
        <div className="quiz-q">{q.q}</div>

        {q.options.map((opt, i) => {
          let cls = 'quiz-opt'
          if (picked !== null) {
            cls += ' disabled'
            if (i === q.answer) cls += ' correct'
            else if (i === picked) cls += ' wrong'
          }
          return (
            <div key={i} className={cls} onClick={() => pick(i)}>
              {opt}
            </div>
          )
        })}

        {picked !== null && (
          <>
            <div className={'quiz-feedback ' + (picked === q.answer ? 'ok' : 'no')}>
              {picked === q.answer ? 'Correct!' : 'Not quite — see the highlighted answer.'}
            </div>
            <button className="btn-primary" onClick={next}>
              {qi + 1 < questions.length ? 'Next Question' : 'See Result'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
