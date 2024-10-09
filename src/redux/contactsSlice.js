import { createSlice } from "@reduxjs/toolkit";
import contacts from "../components/contacts.json";

const initialState = {
  contacts: {
    items: contacts,
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
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
export const { addContact, deleteContact } = slice.actions;
