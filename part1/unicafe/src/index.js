import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>
}

const Statistic = ({ text, value }) => (
  <tr>
    <td>
      {text}
    </td>
    <td>
      {value}
    </td>
  </tr>
)

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
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
      <Button onClick={() => setGood((prevGood) => prevGood + 1)}>good</Button>
      <Button onClick={() => setNeutral((prevNeutral) => prevNeutral + 1)}>
        neutral
      </Button>
      <Button onClick={() => setBad((prevaBad) => prevaBad + 1)}>bad</Button>

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
