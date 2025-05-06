import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Update() {
const nevigate = useNavigate();
  const [data, setData] = useState([]);
  const api = "http://localhost:3000/Student";

  const loadData = async () => {
    try {
      const res = await axios.get(api);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const HandleDelete = async (id) => {
    try {
      const apiDel = `http://localhost:3000/Student/${id}`;
      await axios.delete(apiDel);
      alert("Deleted successfully");
      loadData();
    } catch (error) {
      alert("Error deleting student");
      console.error("Delete error:", error);
    }
  };

function HandleEdit(id){
  console.log(id);
  nevigate(`/Edit/${id}`);
}


  useEffect(() => {
    loadData();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Subject</th>
          <th>Phone</th>
          <th>Laptop</th>
          <th>Car</th>
          <th>Farm</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.subject}</td>
            <td>{student.Phone}</td>
            <td>{student.Laptop}</td>
            <td>{student.Car}</td>
            <td>{student.Farm}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => HandleDelete(student.id)}
              >
                Delete
              </button>
            </td>

            <td>
              <button onClick={()=>{HandleEdit(student.id)}}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
