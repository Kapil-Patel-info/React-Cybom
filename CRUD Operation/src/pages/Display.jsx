import axios from "axios";
import { useEffect, useState } from "react";

export default function Display() {
  const [data, setData] = useState([]);
  const api = "http://localhost:3000/Student";

  const loadData = async () => {
    try {
      const res = await axios.get(api);
      setData(res.data); // Assuming res.data is an array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
        </tr>
      </thead>
      <tbody>
        {data.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.subject}</td>
            <td>{student.Phone}</td>
            <td>{student.Laptop}</td>
            <td>{student.Car}</td>
            <td>{student.Farm}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
