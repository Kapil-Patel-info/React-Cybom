
import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./Features/Todo/TodoSlice";

export default configureStore({
    reducer: {
        todo: todoReducer
      }
})

