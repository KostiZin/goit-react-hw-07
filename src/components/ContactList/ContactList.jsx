import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectContacts,
  selectError,
  selectLoader,
} from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const input = useSelector(selectNameFilter);

  // const isLoading = useSelector(selectLoader);
  const isError = useSelector(selectError);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(input.toLowerCase())
  );

  if (isError) return <h2>Error...Reload the page</h2>;

  // if (contacts === null) return <h2>No contacts here yet</h2>;

  //   return isLoading ? (
  //     <h2>Loading...</h2>
  //   ) : (
  //     <ul className={css.ul}>
  //       {filteredContacts.map(({ id, name, number }) => (
  //         <Contact key={id} id={id} name={name} number={number} />
  //       ))}
  //     </ul>
  //   );
  // };

  return (
    <ul className={css.ul}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
