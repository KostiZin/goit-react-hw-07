import axios from "axios";
import { fetchDataSuccess } from "./contactsSlice";

axios.defaults.baseURL = "https://6703348cbd7c8c1ccd40c698.mockapi.io/";

export const fetchContacts = () => async (dispatch) => {
  const { data } = await axios.get("/contacts");
  dispatch(fetchDataSuccess(data));
};
