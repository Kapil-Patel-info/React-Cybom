import axios from "axios";
import { useState, useEffect } from "react";

const Display = () => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    try {
      const res = await axios.get("http://localhost:3000/Employee");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata();
  });

  const ans = data.map((key, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{key.name}</td>
      <td>{key.age}</td>
      <td>{key.city}</td>
      <td>{key.language}</td>
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>{ans}</tbody>
    </table>
  );
};

export default Display;
