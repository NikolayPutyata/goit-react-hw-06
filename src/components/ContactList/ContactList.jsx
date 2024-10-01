import Contact from "/src/components/Contact/Contact.jsx";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";

const visibleContactsFu = (selectContacts, selectNameFilter) => {
  selectContacts?.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );
};

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);

  const selectNameFilter = useSelector((state) => state.filters?.name);

  const visibleContacts = visibleContactsFu(selectContacts, selectNameFilter);

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
