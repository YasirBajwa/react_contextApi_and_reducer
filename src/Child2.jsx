import React,{useReducer} from 'react';
import CounterReducer from './CounterReducer';
import counterReducer from './CounterReducer';


 const Child2 = () => {
     let [state,dispatch] = useReducer(counterReducer,6);

    return (
        <div>
                <h2>Child 2 by using Reducer</h2>
                <p>The default value of Reducer is :{state}</p>
                <button onClick={ () => dispatch('increment') }>Increment Reducer</button>
        </div>
    )
}

export default Child2