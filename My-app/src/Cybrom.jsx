
import { useContext } from "react";
import context from "./useContext";

const Cybrom = () => {
  const { name, setName } = useContext(context);

  return (
    <>
      <h1>From Cybrom  {name}</h1>
      <button onClick={() => setName("changed name to kapil patel")}>Change Name</button>
      
    </>
  );
};

export default Cybrom;
