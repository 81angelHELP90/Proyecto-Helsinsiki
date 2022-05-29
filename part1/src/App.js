/*
const App = () => (
  <div>
    <p>Buenas tardes Mundo!</p>
  </div>
)
*/
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

}

export default App;
