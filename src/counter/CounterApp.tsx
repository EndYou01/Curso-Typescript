import { ContadorRed } from "./components/ContadorRed"
import { Counter } from "./components/Counter"
import { Formulario } from "./components/Formulario"
import { Formulario2 } from "./components/Formulario2"
import { TimerPadre } from "./components/TimerPadre"
import { Usuario } from "./components/Usuario"


export const CounterApp = () => {
  return (
    <div>
        <h1>React + TypeScript</h1>
        <hr />

        <h2>useState:</h2>

        <Counter/>

        <Usuario/>

        <h2>useEffect - useRef</h2>
        <hr />

        <TimerPadre/>

        <h2>useReducer</h2>
        <hr />  

        <ContadorRed/>


        <h2>CustomHooks:</h2>
        <hr />


        <Formulario/>
        <br />
        <br />
        <br />
        <br />

        <Formulario2/>
        
    </div>
  )
}
