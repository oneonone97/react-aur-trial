import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0); 
  // this is a Hook used to propagate the change in the UI (multiple things)
  // it take two values in an Array 
  // First index is a variable and second 
  
  const addValue = () => {
    // console.log('Add value', Math.random());
    // counter = counter + 1;
    // console.log(counter)
    setCounter(counter + 1);
    // console.log(setCounter()) 
    // dont console log the setfunction it'll return undefined
    // dont return the updated value directly
  }


  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    } else {
      setCounter(counter = 0)
    }
    // console.log('Remove value', Math.random());
    // counter = counter - 1;
    // console.log(counter)
    // console.log(setCounter())
  }

  return (
    <>
      <h1>React Counter</h1>
      <h4>Current Value: {counter} </h4>

      <button onClick={addValue}>Add Value </button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
