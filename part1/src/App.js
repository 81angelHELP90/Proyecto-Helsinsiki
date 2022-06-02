const App = () => {

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
        <p>{props.course}</p>
      </div>
    )
  }

  const Content = (props) => {
    props.parts.forEach(element => {
      console.log("element: ", element.name)
      return (
        <div>
          <p>{element.name}</p>
        </div>
      )
    });
  }

  const Total = (props) => {
    return(
      <div>
        <p>{props.parts}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts[0].excercises} />
    </div>
  )
}

export default App

/*
const Hello = (props) => {
  return (
    <div>
      <p>Hola desde el componente llamado: {props.name} | {props.edad}</p>
    </div>
  )
}

const App = () => {
  console.log('Hola desde el componente')
  const date =  1202 //new Date() 
  const b = 20 
  const c = 34
  const accesorio = {a: 'otro 2', b: 234}

  return (
    <div>
      <h1>Greetings</h1>
      <p>Hola mundo desde un componente Reac. Hoy {date}</p>
      <p>La suma de b + c da: {b + c}</p>
      <Hello name='Angelito'/>
      <Hello name='Noelita'/>
      <Hello name='Amita'/>
      <Hello name='Latarito'/>
      <Hello name={accesorio.a} edad={accesorio.b}/>
    </div>
  )
*/
