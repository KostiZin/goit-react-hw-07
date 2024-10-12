import { createSlice } from "@reduxjs/toolkit";
// import { changeFilter } from "./contactsOps";
// import changeFilter from "./contactsOps";

const initialState = {
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(changeFilter.fulfilled, (state, action) => {
  //     state.filters.name = action.payload.name;
  //   });
  // },
});

export const selectNameFilter = (state) => state.filters.filters.name;

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;
