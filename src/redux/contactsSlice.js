import { createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchContacts } from "./contactsOps";
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

  //============= regular reducers work locally ===========
  // reducers: {
  //   fetchDataSuccess: (state, action) => {
  //     state.contacts.items = action.payload;
  //     state.loading = false;
  //   },

  //   setIsLoading: (state, action) => {
  //     state.loading = action.payload;
  //   },
  //   setError: (state, action) => {
  //     state.error = action.payload;
  //   },
  //   addContact: (state, action) => {
  //     state.contacts.items.push(action.payload);
  //   },
  //   deleteContact: (state, action) => {
  //     state.contacts.items = state.contacts.items.filter(
  //       (contact) => contact.id !== action.payload
  //     );
  //   },
  // },

  //============= extraReducers work with server (backend) ===========
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== action.payload
        );
      });
  },
});

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectLoader = (state) => state.contacts.loading;

export const contactsReducer = slice.reducer;
export const {
  addContact,
  deleteContact,
  fetchDataSuccess,
  setIsLoading,
  setError,
} = slice.actions;
