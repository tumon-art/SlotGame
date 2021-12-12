import React, {useRef} from "react"
import { UC } from "./UC"

export const Main = () => {
  const score = useRef(0) // Using UseRef 
  const {randomEmoji,dispatch} = React.useContext(UC)
  if (randomEmoji[0] === randomEmoji[1] && randomEmoji[1]===randomEmoji[2]) {
    score.current = score.current +1;
  };
  return (
    <div className="containerHold">
    <div className="container"> {console.log('render')}
    {randomEmoji.map((e,i)=> <div key={i}> {e} </div>)}

    <button onClick={()=>dispatch({type:"REF"})}> Try!  </button>
    </div>
    <h1> Score = {score.current} </h1>
    </div>
  )
}