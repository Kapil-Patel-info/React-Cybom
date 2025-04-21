import { useState } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import { counterContext } from "./Context";

const App = () => {
  let [counter, setCounter] = useState(0);

  const incCount = () => {
    setCounter(counter + 1);
  };
  // uploading 

  return (
    <>
      <counterContext.Provider value={{counter}}>
        <Comp1 />
        <Comp2 />
        <h1>From App.jsx</h1>

        <button onClick={incCount}>increase count</button>

      </counterContext.Provider>
      
    </>
  );
};

export default App;
