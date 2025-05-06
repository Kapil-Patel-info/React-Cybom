import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./Features/Todo/TodoSlice";

export default function Add(){
const [input,setInput]= useState("");

const dispatch = useDispatch();

  function  handleSumbit(e){
       e.preventDefault();
       dispatch(addTodo(input));
       setInput("");
}


    return(<>
    
    <form>
      <input type="text" placeholder="enter Task"  value={input} onChange={(e)=>setInput (e.target.value)}/>
      <button onClick={handleSumbit}>Add Task</button>
    </form>
    
    </>);
}