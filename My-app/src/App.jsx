import { increment, decrement } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const mycnt = useSelector(state => state.mycounter.count);
  const dispatch = useDispatch();

  return (
    <>

      <div className="p-5 d-flex justify-content-center" >
        <h1>Learingin React Toolkit</h1>
        <button className="btn btn-primary me-2" onClick={() => dispatch(increment())}>
          Increment
        </button> 

        <h1>{mycnt}</h1> 

        <button className="btn btn-danger" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default App;
