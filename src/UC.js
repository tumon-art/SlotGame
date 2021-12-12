import React, { useReducer } from "react"

// Use Context
export const UC = React.createContext();

// State
const initialState = ['🦚','🦃','💵','💎']


// Main Function 
const reducer = (state,action) => {
    switch (action.type) {
        case "REF" : 
            return [...state];
        // case "MATCH" :
        //     return {...state,score:state.score+1}
        default:
            break;
    }
}
// Provider takes children from App.js
export const Provider = ({children}) => {
    // Reducer Hook 
    const [state, dispatch] = useReducer(reducer, initialState,)

    const random = () => state[Math.floor(Math.random() * state.length)]
    // const one = random()
    // const two = random()
    // const three = random()
    const randomEmoji = [random(),random(),random()]
  return (
   <>
   <UC.Provider
   value={{ dispatch,
       randomEmoji:randomEmoji,
   }}
   >

       {children}
   </UC.Provider>
   </>
  )
}