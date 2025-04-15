import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Edit = () => {
  const { id } = useParams(); // Get id from route params
  const [input, setInput] = useState({});

  // Fetch the specific employee data based on ID
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/Employee/${id}`);
      setInput(res.data); // Set the state with the fetched employee data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData(); // Fetch employee data when component mounts
  }, [id]);

  // Handle input changes and update state
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission to update the employee data
  const handleOnSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submit behavior

    try {
      // Send PUT request to update the employee data
      await axios.put(`http://localhost:3000/Employee/${id}`, input);
      alert("Data edited successfully!"); // Success message
    } catch (error) {
      console.error("Error editing data:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Edit Employee</h3>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            name="name"
            value={input.name}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="Enter Age"
            name="age"
            value={input.age}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="Enter City"
            name="city"
            value={input.city}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="language" className="form-label">Language</label>
          <input
            type="text"
            className="form-control"
            id="language"
            placeholder="Enter Language"
            name="language"
            value={input.language}
            onChange={handleInput}
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Update Employee</button>
      </form>
    </div>
  );
};

export default Edit;
