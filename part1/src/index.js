import React from 'react'
import ReactDOM from 'react-dom'

// Headerはコースの名前のレンダリング
const Header = (props) => <h1>{props.course}</h1>

// Contentはパーツとその演習の数をレンダリング
// const Content = ({props}) => {
//   return(
//   <>
//   {props.map((part, index) => (
//     <p key={index}>
//       {part}
//     </p>
//   ))}
//   </>
//   )
// }
// Totalは演習の総数をレンダリング
// const Total = () => {
//   return()
// }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      {/* <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p> */}
      



      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
