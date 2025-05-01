import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "mycolor",
  initialState: {
    work: []
  },
  reducers: {
    changeColor: (state, action) => {
      console.log(action.payload);
      state.work.push(action.payload);
    },
  },
});

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;
