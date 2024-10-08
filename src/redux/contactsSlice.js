import { createSlice } from "@reduxjs/toolkit";

const contacts = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contacts,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
