const App = () => {
  /*
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  */

  let parts

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        excercises: 10
      },
      {
        name: 'Using props to pass data',
        excercises: 7
      },
      {
        name: 'State of a component',
        excercises: 14
      }
    ]
  }

  const Header = (props) => {
    return (
      <div>
        <p>{props.name}</p>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <p>{props.parts.name}</p>
      </div>
    )
  }

  const Total = (props) => {
    <div>
      <p>{props.parts.excercises}</p>
    </div>
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}

export default App
