import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchContacts } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

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
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContacts.pending,
          addContacts.pending
        ),
        (state, action) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContacts.fulfilled,
          addContacts.fulfilled
        ),
        (state, action) => {
          state.loading = false;
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContacts.rejected,
          addContacts.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectLoader = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const contactsReducer = slice.reducer;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
