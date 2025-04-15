import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Edit = () => {
  const { id } = useParams(); // Get id from route params
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(""); // To handle error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle submit button state

  // Fetch the specific employee data based on ID
  const getData = async () => {
    setLoading(true); // Set loading state to true while fetching
    try {
      const res = await axios.get(`http://localhost:3000/Employee/${id}`);
      setInput(res.data); // Set the state with the fetched employee data
    } catch (error) {
      setError("Error fetching data."); // Set error message if something goes wrong
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading state to false after fetching
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

    if (!input.name || !input.age || !input.city || !input.language) {
      setError("All fields are required!"); // Set error if any field is empty
      return;
    }

    setIsSubmitting(true); // Disable the button while submitting
    try {
      // Send PUT request to update the employee data
      await axios.put(`http://localhost:3000/Employee/${id}`, input);
      alert("Data edited successfully!"); // Success message
    } catch (error) {
      setError("Error editing data."); // Set error message if the update fails
      console.error("Error editing data:", error);
    } finally {
      setIsSubmitting(false); // Enable button again after submission
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Edit Employee</h3>

      {/* Show loading spinner if data is being fetched */}
      {loading && <div className="text-center">Loading...</div>}

      {/* Show error message if an error occurred */}
      {error && <div className="alert alert-danger">{error}</div>}

      <form className="form" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            name="name"
            value={input.name || ""}
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
            value={input.age || ""}
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
            value={input.city || ""}
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
            value={input.language || ""}
            onChange={handleInput}
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-success w-100" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating..." : "Update Employee"}
        </button>
      </form>
    </div>
  );
};

export default Edit;
