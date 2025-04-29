import { increment, decrement } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const mycnt = useSelector(state => state.mycounter.count);
  const dispatch = useDispatch();

  return (
    <>

     
    </>
  );
};

export default App;
