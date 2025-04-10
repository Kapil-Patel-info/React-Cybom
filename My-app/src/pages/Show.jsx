import React, { useState, useEffect } from "react";
import axios from "axios";

const Show = () => {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null); 

  const fetchData = async () => {
    try {
      let res = await axios.get("http://localhost:3000/data");
      setData(res.data); 
    } catch (err) {
      setError(err.message);
    }
  };

  fetchData();

  return (
    <>
      <h1 align="center">This is the Show Page</h1><br />

      <table border="4" className="table ">
        <thead className="thead table-danger">
          <tr >
            <th>Name</th>
            <th>Roll No</th>
            <th>City</th>
            <th>Subject</th>
          </tr>
        </thead>

        <tbody className="thead table-info">
       { data.map((item) => (
              <tr key={item.rollno}>
                <td>{item.name}</td>
                <td>{item.rollno}</td>
                <td>{item.city}</td>
                <td>{item.sub}</td>
              </tr>))}
        </tbody>
      </table>
    </>
  );
};

export default Show;
