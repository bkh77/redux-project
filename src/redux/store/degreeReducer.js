import { createSlice } from "@reduxjs/toolkit";

const degreeSlice = createSlice({
  name: "degree",
  initialState: {
    degrees: [
      { id: 1, name: "Junior", bonus: 10 },
      { id: 2, name: "Middle", bonus: 15 },
      { id: 3, name: "Senior", bonus: 30 },
    ],
  },
  reducers: {
    addDegree: (state, action) => {
      state.degrees.push(action.payload);
    },
    delDegree: (state, action) => {
      const filtered = state.degrees.filter((i) => i.id !== action.payload);
      state.degrees = filtered;
    },
    editDegree: (state, action) => {
      state.degrees.splice(
        state.degrees.findIndex((i) => i.id === action.payload.id),
        1,
        action.payload
      );
    },
  },
});

export const { addDegree, delDegree, editDegree } = degreeSlice.actions;
export default degreeSlice.reducer;
