import Contact from "/src/components/Contact/Contact.jsx";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const visibleContactsFu = (contacts, filterName) => {
  return contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(filterName?.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filterName = useSelector(selectNameFilter);

  const visibleContacts = visibleContactsFu(contacts, filterName);

  return (
    <>
      <ul className={s.conList}>
        {visibleContacts?.map(({ id, name, number }) => (
          <Contact key={id} name={name} phone={number} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
