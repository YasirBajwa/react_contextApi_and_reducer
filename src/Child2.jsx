import React,{useReducer} from 'react'
import CounterReducer from './CounterReducer';
 



export const Child2 = () => {
    
    let [state,dispatch] = useReducer(CounterReducer,15);
    // 15 is the default value for reducer which store in state and dispatch is the function which will change the state .
    
    return (
        <div>
            
            <h2>Child2</h2>
               <h3>The value of state is : {state}</h3>
               <p>Child2 state is changed by using Reducer</p>

             <button onClick={ () => {dispatch('INCREMENT')} }>Increment Reducer</button>
        </div>
    )
}
export default Child2