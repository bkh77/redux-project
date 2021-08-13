import { createSlice } from "@reduxjs/toolkit";

const positionsSlice = createSlice({
  name: "positions",
  initialState: {
    positions: [
      { id: 1, name: "Teamleader", salary: 2000 },
      { id: 2, name: "Manager", salary: 1500 },
      { id: 3, name: "Developer", salary: 1000 },
    ],
  },
  reducers: {
    addPosition: (state, action) => {
      state.positions.push(action.payload);
    },
    delPosition: (state, action) => {
      const filtered = state.positions.filter((i) => i.id !== action.payload);
      state.positions = filtered;
    },
    editPosition: (state, action) => {
      state.positions.splice(
        state.positions.findIndex((i) => i.id === action.payload.id),
        1,
        action.payload
      );
    },
  },
});

export const { addPosition, delPosition, editPosition } =
  positionsSlice.actions;
export default positionsSlice.reducer;
