import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6703348cbd7c8c1ccd40c698.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "fetchAll",
  async (_, thinkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "addContact",
  async (body, thinkAPI) => {
    try {
      const { data } = await axios.post(`/contacts`, body);
      return data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "deleteContact",
  async (id, thinkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);

      return data.id;
    } catch (error) {
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

// export const changeFilter = createAsyncThunk(
//   "changeFilter",
//   async (_, thinkAPI) => {
//     try {
//       const { data } = await axios.delete(`/contacts`);
//       return data;
//     } catch (error) {
//       return thinkAPI.rejectWithValue(error.message);
//     }
//   }
// );
