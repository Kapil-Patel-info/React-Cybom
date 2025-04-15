import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState([]); // All employee data
  const [query, setQuery] = useState(""); // Search query
  const [filtered, setFiltered] = useState([]); // Filtered result

  // Fetch data from API
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/Employee");
      setData(res.data);
      setFiltered(res.data); // Show all data initially
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    getData();
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const result = data.filter((employee) =>
      employee.name.toLowerCase().includes(value)
    );
    setFiltered(result);
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Search Employee</h3>
      
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name..."
        value={query}
        onChange={handleSearch}
      />

      {filtered.length > 0 ? (
        <ul className="list-group">
          {filtered.map((emp) => (
            <li key={emp.id} className="list-group-item">
              <strong>{emp.name}</strong> - {emp.city} - Age: {emp.age} -Language: {emp.language}
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-danger text-center">No employee found.</div>
      )}
    </div>
  );
};

export default Search;
