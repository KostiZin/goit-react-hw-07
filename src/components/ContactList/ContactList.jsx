import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectError,
  selectLoader,
  selectFilteredContacts,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoader);
  const isError = useSelector(selectError);

  if (isError) return <h2>Error...Please, reload the page</h2>;

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <ul className={css.ul}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
