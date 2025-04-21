import { useContext } from "react";
import { counterContext } from "./Context";

const Comp1 = ()=>{
const value = useContext(counterContext);
    return(<>
      <h1>{value.counter}</h1>

    </>)
}

export default Comp1;