// UseContext.jsx
import { useState, createContext } from "react";

const myContext = createContext();

const UseContext = ({ children }) => {
  const [name, setName] = useState("Kapil");

  return (
    <myContext.Provider value={{ name }}>
      {children}
    </myContext.Provider>
  );
};

export default UseContext;
export { myContext };
