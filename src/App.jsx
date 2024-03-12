import { useState } from "react";
import "./App.css";

function App() {
  let [counter, Aditya] = useState(0);

  // let counter = 5;
  const addValue = () => {
    if (counter < 20) {
      Aditya(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      Aditya(counter - 1);
    }
  };

  const startAgain = () => {
    Aditya(0);
  };
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <button onClick={startAgain}>Start Again</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
