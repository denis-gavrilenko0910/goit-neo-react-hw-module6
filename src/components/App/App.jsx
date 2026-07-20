import ContactsForm from "../ContactsForm/ContactsForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import style from "./App.module.css";

const App = () => {
  return (
    <main className={style.app}>
      <h1>Phonebook</h1>

      <ContactsForm />

      <h2>Contacts</h2>

      <SearchBox />

      <ContactList />
    </main>
  );
};

export default App;
