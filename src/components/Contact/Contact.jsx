import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { BsTrash3 } from "react-icons/bs";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.li}>
      <div className={css.div}>
        <p className={css.element}>
          <BsFillPersonFill />
          {name}
        </p>
        <p className={css.element}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        <BsTrash3 size="20" />
      </button>
    </li>
  );
};

export default Contact;
