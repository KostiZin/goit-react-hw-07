import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { useEffect } from "react";
import { selectLoader } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();

  const loader = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchContacts()), [dispatch];
  });
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {/* {loader && <h2>Loading...</h2>} */}
        <ContactList />
      </div>
    </>
  );
}

export default App;
