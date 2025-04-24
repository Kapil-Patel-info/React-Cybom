import { useState, useMemo } from "react";

const App = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);

  const myMulti = useMemo(() => {
    console.log("*******"); 
    return add * 2;
  }, [add]);


  // without memo  | it renders even when we subtract
  // const myMulti = (() => {              
    // console.log("Recalculating...");   
  //   return add * 2;
  // })();
  

  return (
    <>


      <h1>Addition: {add}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>

      <h1>Subtraction: {sub}</h1>
      <button onClick={() => setSub(sub - 1)}>Subtraction</button>

      <hr />

      <h2>Multiplication (memoized): {myMulti}</h2>
    </>
  );
};

export default App;
