import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./counterSlice"; // corrected 'form' to 'from'

const store = configureStore({
  reducer: {
    mycounter: myReducer // added colon :
  }
});

export default store;
