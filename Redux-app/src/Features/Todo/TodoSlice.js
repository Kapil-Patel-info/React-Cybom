import { createSlice, nanoid } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    todos: [{ id: "abc", task: "sample-todo", isDone: false }],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => 
        todo.id !== action.payload
      );
    },
    markAsDone: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo,isDone : true} : todo);
    },
  },
});

export const {addTodo,deleteTodo,markAsDone} = TodoSlice.actions;
export default TodoSlice.reducer;

