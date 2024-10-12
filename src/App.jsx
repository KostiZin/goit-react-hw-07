import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { useEffect } from "react";
import { selectError, selectLoader } from "./redux/contactsSlice";

function App() {
  const isLoading = useSelector(selectLoader);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading ? <h2>Loading...</h2> : <ContactList />}
        {/* <ContactList /> */}
      </div>
    </>
  );
}

export default App;
