import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [],
    },
  },
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
