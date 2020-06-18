import React,{useState} from 'react';
import {Parent} from './Parent';
import CounterContext from './CounterContext';

 const App = () => {
   
  let counter = useState(10)

  return (
     <CounterContext.Provider  value={counter}>
       {/* provider will take the value if its empty it will take undefined */}
       <div>
      <Parent/>
       </div>
    </CounterContext.Provider>
  )
}

export default App;