import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectError,
  selectLoader,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
import { ProgressBar } from "react-loader-spinner";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoader);
  const isError = useSelector(selectError);

  if (isError) return <h2>Error...Please, reload the page</h2>;

  return isLoading ? (
    <div className={css.wrapperLoader}>
      <ProgressBar
        visible={true}
        height="100"
        width="100"
        ariaLabel="progress-bar-loading"
        barColor="rgb(181, 173, 199)"
        borderColor="#6a3fd7"
      />
    </div>
  ) : (
    <ul className={css.ul}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
