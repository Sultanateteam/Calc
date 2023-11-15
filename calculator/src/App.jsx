import './App.css';
import { operation, operations, num } from './data';
import { useState } from 'react';
function App() {
  const [display, setDisplay] = useState('')

  const handleDelete= ()=>setDisplay(display.toString().slice(0,display.length-1))

  const opera = (el)=>{
      if(display){
        setDisplay((prev)=>prev+el.oper)
      }
      if(operation.includes(display.toString().at(-1))){
        setDisplay(display.slice(0,display.length-1))
        setDisplay((prev)=>prev+el.oper)
      }
  }

  const nomera = (number)=>{
    setDisplay((prev)=>prev+number.toString())
    if((display.length<=1)&&(display.toString()[0]==0)&&(number===0)){
      setDisplay(display.slice(0,display.length))
    }
    if((display.toString()[0]==0)&&(display.toString()[1]?display.toString()[1]!=0:false)){
      setDisplay(display.slice(1,display.length))
    }
  }
  const equal = ()=>{
    if(!operation.includes(display.toString().at(-1))){
      setDisplay(eval(display))
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {display?display:'0'}
        </div>
        <div className="operations">
          {operations.map((el)=>(
            <button onClick={()=>opera(el)} key={el.id}>{el.oper}</button>
          ))}
        </div>
        <div className="numbers">
          {num().map((number,index)=>(
            <button key={index} onClick={()=>nomera(number)}>{number}</button>
          ))}
          <button onClick={handleDelete}>delete</button>
          <button onClick={equal}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
