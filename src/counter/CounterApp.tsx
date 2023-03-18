import { Counter } from "./components/Counter"
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

        
    </div>
  )
}
