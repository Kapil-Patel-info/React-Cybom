
import { useState } from "react";
import context from "./useContext";
import Cybrom from "./Cybrom";

const App = () => {
  const [name, setName] = useState("kapil");

  return (
    <context.Provider value={{ name, setName }}>
      <h1>  This is App.jsx </h1>
      <Cybrom />
    </context.Provider>
  );
}

  export default App;