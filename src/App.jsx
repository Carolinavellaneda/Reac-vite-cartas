
import './App.css'
//import Card from './Componentes/Card'
import CardP from './Componentes/Cardprogramadores'
//import lenguajes from "./datos/lenguajes";
//import Cardprogramadores from "./Componentes/Cardprogramadores";
import programadores from "./datos/programadores"

function App() {


  const ListasProgramadores = programadores.map((l,index) => {
    return <CardP key={index} titulo={l.nombre} descripcion={l.nprograma} />

  })

 return (
      <div className='App'>
        <h1> Programadores </h1>
        <div className='container'>
        {ListasProgramadores}
        </div>        
      </div>
     
  )
}

export default App


  //const ListasLenguajes = lenguajes.map((l,index) => {
  //return <Card key={index} titulo={l.ntitulo} descripcion={l.ndescripcion} />
  //})

/*  return (
      <div className='App'>
        <h1>Lenguajes de Programacion </h1>
        <div className='container'>
        {ListasLenguajes}
        </div>        
      </div>
     
  )
}

export default App
*/
