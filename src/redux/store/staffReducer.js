import { createSlice } from "@reduxjs/toolkit";

const staffSlice = createSlice({
  name: "staffs",
  initialState: {
    staffs: [
      {
        id: 1,
        firstName: "Bakhtiyor",
        lastName: "Khasanov",
        phone: 990000101,
        position: 1,
        degree: 1,
      },
      {
        id: 2,
        firstName: "Stive",
        lastName: "Jobs",
        phone: 990000102,
        position: 2,
        degree: 2,
      },
      {
        id: 3,
        firstName: "Jeff",
        lastName: "Bezos",
        phone: 990000103,
        position: 3,
        degree: 3,
      },
      {
        id: 4,
        firstName: "Elon",
        lastName: "Musk",
        phone: 990000104,
        position: 2,
        degree: 1,
      },
    ],
  },
  reducers: {
    addStaff: (state, action) => {
      state.staffs.push(action.payload);
    },
    delStaff: (state, action) => {
      const filtered = state.staffs.filter((i) => i.id !== action.payload);
      state.staffs = filtered;
    },
    editStaff: (state, action) => {
      state.staffs.splice(
        state.staffs.findIndex((i) => i.id === action.payload.id),
        1,
        action.payload
      );
    },
  },
});

export const { addStaff, delStaff, editStaff } = staffSlice.actions;
export default staffSlice.reducer;
