import { useReducer } from "react";


const App=()=>{
  cosnt [count , dispatch] = useReducer(reducer,0);

  const dispatch=(state,action)=>{
    if(action.type === Increment){
      return count + 1;
    }
    else if(action.type === Decrement){
      return count -1;
    }
  }

  return(<>

<h1>{count}</h1>

<button onClick={()=>{dispatch({type:Increment})}}>Increment</button>
<button onClick={()=>{dispatch({type:Decrement})}}>Decrement</button>

  
  </>);
}


export default App;