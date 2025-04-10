import { useEffect, useState } from "react";
import axios from "axios";


const Form =()=>{

    const [input, setInput] = useState({ name: "", rollno: "", city: "", sub: "" });

    const handleInput = (e) => {
      const { name, value } = e.target;
      setInput((prev) => ({ ...prev, [name]: value }));
    };
  
    const onSubmit = async (e) => {
      e.preventDefault(); 
  
      let api = "http://localhost:3000/data";
      
      try {
        let res = await axios.post(api, input);
        alert("Data saved successfully!");
        console.log(res.data);
      } catch (error) {
        console.error("Error saving data:", error);
        alert("Failed to save data.");
      }
    };
    return(
    <>
    <form onSubmit={onSubmit}>
      <br />
      <label>
        Name: <input type="text" name="name" value={input.name} onChange={handleInput} />
      </label>
      <br /><br />
      <label>
        Roll No: <input type="text" name="rollno" value={input.rollno} onChange={handleInput} />
      </label>
      <br /><br />
      <label>
        City: <input type="text" name="city" value={input.city} onChange={handleInput} />
      </label>
      <br /><br />
      <label>
        Subject: <input type="text" name="sub" value={input.sub} onChange={handleInput} />
      </label>
      <br /><br />
      <button type="submit">Submit</button>
    </form>

   

  </>
  );

}


export default Form;