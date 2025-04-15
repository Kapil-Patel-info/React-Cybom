import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // ✅ added this

  const getdata = async () => {
    try {
      const res = await axios.get("http://localhost:3000/Employee");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata(); // ✅ now runs only once
  }, []);

  const deleteData = async (id) => {
    try {
      let api = `http://localhost:3000/Employee/${id}`;
      await axios.delete(api);
      alert("Data deleted");
      getdata(); // ✅ refresh data after delete
    } catch (err) {
      console.log(err);
    }
  };

  const editData = (id) => {
    navigate(`/Edit/${id}`);
  };

  const ans = data.map((key, index) => (
    <tr key={key.id}>
      <td>{index + 1}</td>
      <td>{key.name}</td>
      <td>{key.age}</td>
      <td>{key.city}</td>
      <td>{key.language}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteData(key.id)}
        >
          Delete
        </button>
      </td>
      <td>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => editData(key.id)}
        >
          Edit
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Employee Records</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Language</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </div>
  );
};

export default Update;
