import React,{useState} from 'react';
import './App.css';

function App() {
  let [num1,setNum1]=useState(0)
  return (
    <div className="App">
      <h1>Increasing Value App.</h1>
       <h1>{num1}</h1>
       <button onClick={()=>{
        setNum1(num1+1)
       }}>Click</button>
    </div>
  );
}

export default App;
