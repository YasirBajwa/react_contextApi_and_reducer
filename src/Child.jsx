import React,{useContext} from 'react';
import CounterContext from './CounterContext';

export const Child = () => {
    
   let  counterValue = useContext(CounterContext);

    return (
        <div>
            <h1>Child1</h1>
    <h4>The default value of Context is :{counterValue[0]}</h4>
    {/* The  value inside counterValue is an array its first index is value and its second index is function through which we can change its state. */}
    <button onClick={ () => {counterValue[1](++counterValue[0])} }>Increment Context</button>
        </div>
    )
}

