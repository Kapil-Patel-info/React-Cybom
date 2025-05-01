import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./colorSlice";
import { useState } from "react";

const App = () => {
  const data = useSelector(state => state.mycolor.work); // correct path
  const dispatch = useDispatch();
  const [txtval, settxtval] = useState("");

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Welcome</h1>
        Enter task:
        <input
          type="text"
          value={txtval}
          onChange={(e) => settxtval(e.target.value)}
        />
        <button onClick={() => {
          if (txtval.trim() !== "") {
            dispatch(changeColor({ task: txtval }));
            settxtval("");
          }
        }}>
          Add Task
        </button>
        <hr />
        <div
          style={{
            backgroundColor: "lightblue",
            height: "500px",
            width: "500px",
            margin: "0 auto",
            overflowY: "auto",
          }}
        >
          <table border="1" style={{ width: "100%", textAlign: "left" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Your Task List</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.task}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
