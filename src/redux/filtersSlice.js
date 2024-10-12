import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "filters",
  initialState,
  //we use regular reducers because we use data locally
  //we filter what we already received from the server
  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.filters.name;

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;
