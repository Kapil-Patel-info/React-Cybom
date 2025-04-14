import React, { useState, useEffect } from "react";
import axios from "axios";

const Show = () => {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState({ name: "", rollno: "", city: "", sub: "" });
  const [search, setSearch] = useState(""); 

  const fetchData = async () => {
    try {
      let res = await axios.get("http://localhost:3000/data");
      setData(res.data);
    } catch (err) {
      console.error("Error fetching data:", err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/data/${id}`);
      alert("Data deleted successfully");
      fetchData();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete data.");
    }
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditInput(item);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/data/${editingId}`, editInput);
      alert("Data updated successfully!");
      setEditingId(null);
      fetchData();
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update data.");
    }
  };

 //search fun
  const filteredData = data.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <h1 align="center">This is the Show Page</h1><br />

              {/* search box */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by name, roll no, city, subject..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", width: "50%", fontSize: "16px" }}
        />
      </div>

      <table border="4" className="table">
        <thead className="thead table-danger">
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>City</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="thead table-info">
          {filteredData.map((item) => (
            <tr key={item.id}>
              {editingId === item.id ? (
                <>
                  <td><input type="text" name="name" value={editInput.name} onChange={handleEditChange} /></td>
                  <td><input type="text" name="rollno" value={editInput.rollno} onChange={handleEditChange} /></td>
                  <td><input type="text" name="city" value={editInput.city} onChange={handleEditChange} /></td>
                  <td><input type="text" name="sub" value={editInput.sub} onChange={handleEditChange} /></td>
                  <td>
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.name}</td>
                  <td>{item.rollno}</td>
                  <td>{item.city}</td>
                  <td>{item.sub}</td>
                  <td>
                    <button onClick={() => deleteData(item.id)}>Delete</button>
                    &nbsp;
                    <button onClick={() => startEdit(item)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Show;
