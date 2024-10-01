import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
    },
  },
  reducers: {
    changeFilter: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
