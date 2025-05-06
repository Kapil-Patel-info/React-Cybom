import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);       // All items
  const [filtered, setFiltered] = useState([]); // Filtered items


  useEffect(() => {
    axios.get("http://localhost:3000/Student")
      .then(res => {
        setData(res.data);
        setFiltered(res.data);
      })
      .catch(err => console.error("Error loading data:", err));
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.subject?.toLowerCase().includes(value.toLowerCase()) ||
      item.Phone?.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(filteredData);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Search Student</h2>
      <input
        type="text"
        placeholder="Search by name, subject, phone..."
        value={query}
        onChange={handleSearch}
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />

      <ul style={{ marginTop: "20px" }}>
        {filtered.length > 0 ? (
          filtered.map(item => (
            <li key={item.id} style={{ padding: "10px 0", borderBottom: "1px solid #ccc" }}>
              <strong>{item.name}</strong> - {item.subject} - {item.Phone}
            </li>
          ))
        ) : (
          <li>No results found.</li>
        )}
      </ul>
    </div>
  );
}
