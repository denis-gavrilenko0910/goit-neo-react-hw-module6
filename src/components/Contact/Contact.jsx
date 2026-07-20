import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import style from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={style.contact}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
