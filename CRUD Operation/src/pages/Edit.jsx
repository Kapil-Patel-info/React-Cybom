import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({});

  const api = `http://localhost:3000/Student/${id}`;

  const loadData = async () => {
    try {
      const res = await axios.get(api);
      setInput(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(api, input);
      alert("Edit successfully");
      navigate("/Display"); // navigate to main page or list view
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <>
      <h1>Edit Page for Student ID: {id}</h1>

      <form onSubmit={HandleSubmit}>
        Name: <input type="text" name="name" value={input.name || ""} onChange={HandleChange} /><br />
        Subject: <input type="text" name="subject" value={input.subject || ""} onChange={HandleChange} /><br />
        Phone: <input type="text" name="Phone" value={input.Phone || ""} onChange={HandleChange} /><br />
        Laptop: <input type="text" name="Laptop" value={input.Laptop || ""} onChange={HandleChange} /><br />
        Car: <input type="text" name="Car" value={input.Car || ""} onChange={HandleChange} /><br />
        Farm: <input type="text" name="Farm" value={input.Farm || ""} onChange={HandleChange} /><br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
