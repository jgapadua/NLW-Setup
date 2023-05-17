import './styles/global.css';

import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
      <Habit completed={5} />
      <Habit completed={10}/> 
      <Habit completed={20}/>
      <Habit completed={30} />
      <Habit completed={40}/>
      <Habit completed={50}/>
      <Habit completed={0}/>
      </div>
  )
}

export default App
 
//Componente: Reaproveita/isolar
//Propriedade: Uma informação enviada pra modificar um componente visual ou comportamentalmente