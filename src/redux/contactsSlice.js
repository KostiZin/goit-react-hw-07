import { createSlice } from "@reduxjs/toolkit";
// import contacts from "../components/contacts.json";

const initialState = {
  contacts: {
    items: [],
  },
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.contacts.items = action.payload;
    },
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const selectContacts = (state) => state.contacts.contacts.items;

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact, fetchDataSuccess } = slice.actions;
