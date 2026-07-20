import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import style from "./ContactsForm.module.css";

const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    if (!name || !number) {
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      }),
    );

    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>

      <label>
        Number
        <input type="tel" name="number" required />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactsForm;
