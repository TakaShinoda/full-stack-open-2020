import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive}</p>
      </>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = all ? (good * 1 + neutral * 0 + bad * -1) / all : 0
  const positive = all ? `${good / all}%` : '0%'

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood((prevGood) => prevGood + 1)}>good</button>
      <button onClick={() => setNeutral((prevNeutral) => prevNeutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad((prevaBad) => prevaBad + 1)}>bad</button>

      <h2>statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
