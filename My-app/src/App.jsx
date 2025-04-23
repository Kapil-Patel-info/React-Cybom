import { useEffect, useRef, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const conRef = useRef(0);

  useEffect(() => {
    // Increment the ref value whenever the name changes
    conRef.current += 1;
    console.log("Current count:", conRef.current); // Log the current count
  }, [name]); // Dependency array to run effect when 'name' changes

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p>Input changes count: {conRef.current}</p> {/* Display the count */}
    </>
  );
};

export default App;