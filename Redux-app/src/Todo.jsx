import { useDispatch, useSelector } from "react-redux";
import Add from "./Add";
import { deleteTodo, markAsDone } from "./Features/Todo/TodoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Todo List</h2>
      <Add />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.isDone  ? "line-through" : "none",
            }}
          >
            {todo.task} {"  "}
            <button
              onClick={() => {
                dispatch(deleteTodo(todo.id));
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                dispatch(markAsDone(todo.id));
              }}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
