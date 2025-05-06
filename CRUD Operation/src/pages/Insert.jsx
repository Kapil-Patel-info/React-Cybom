import { useState } from "react"
import axios from "axios";



export default function Insert(){
    const [input,setInput] = useState({name:"",subject:"",Phone:"",Laptop:"",Car:"",Farm:""});

    const HandleChange=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
    setInput((v)=>({...v,[name]:value}));
    console.log(input);
    
    }

    const HandleSumbit= async(e)=>{
        e.preventDefault();
        const api = "http://localhost:3000/Student";
        let res = await axios.post(api,input);
       setInput({name:"",subject:"",Phone:"",Laptop:"",Car:"",Farm:""});
     alert("data saved sucessfully");

    }

    return(<>
<form onSubmit={HandleSumbit}>
Name :  <input type="text" name="name" value={input.name} onChange={HandleChange} /> <br />
Subject :  <input type="text" name="subject" value={input.subject} onChange={HandleChange} /> 
Phone :  <input type="text" name="Phone" value={input.Phone} onChange={HandleChange} /> <br />
Laptop :  <input type="text" name="Laptop" value={input.Laptop} onChange={HandleChange} /> <br />
Car :  <input type="text" name="Car" value={input.Car} onChange={HandleChange} /> <br />
Farm :  <input type="text" name="Farm" value={input.Farm} onChange={HandleChange} /> <br />

<button >Sumbit</button>
</form>
    </>)
}