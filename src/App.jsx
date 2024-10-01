import ContactList from "/src/components/ContactList/ContactList.jsx";
import SearchBox from "/src/components/SearchBox/SearchBox.jsx";
import ContactForm from "/src/components/ContactForm/ContactForm.jsx";
import "/src/App.css";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Layout>
    </>
  );
};

export default App;
