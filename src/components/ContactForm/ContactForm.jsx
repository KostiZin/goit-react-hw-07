import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "../../redux/contactsOps";
import { selectError } from "../../redux/contactsSlice";

const ContactForm = () => {
  const initialValue = {
    number: "",
    name: "",
  };

  const isError = useSelector(selectError);

  const dispatch = useDispatch();

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name is too short, min 3 symbols")
      .max(50, "Name is too long")
      .required("Name is required")
      .matches(
        /^([A-Za-zА-Яа-я\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        "Name can only contain letters."
      ),
    number: Yup.string()
      .required("A phone number is required")
      .min(5, "A phone number is too short")
      .matches(/^([0]([0-9]+)?|[1-9]([0-9]+)?([0-9]+)?)$/, "Use only numbers"),
  });

  const onSubmit = (values, options) => {
    dispatch(addContacts(values));
    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={formSchema}
      >
        <Form className={css.formWrapper}>
          <label className={css.fieldWrapper}>
            <p>Name</p>
            <ErrorMessage className={css.error} name="name" component="span" />
            <Field className={css.field} type="text" name="name" />
          </label>
          <label className={css.fieldWrapper}>
            <p>Number</p>
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
            <Field className={css.field} type="text" name="number" />
          </label>
          <button
            className={`${!isError ? css.btnActive : css.btnDisabled}`}
            type="submit"
          >
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
