import React from "react";
import "./App.css";
import { ContactList } from "./components/contact-list";

function App() {
  const [contactList, setContactList] = React.useState([]);

  React.useEffect(() => {
    async function getContacts() {
      try {
        const response = await fetch("http://127.0.0.1:3000/contacts");
        const json = await response.json();
        setContactList(json);
      } catch (error) {
        throw new Error(error.message);
      }
    }
    getContacts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ContactList contacts={contactList} />
      </header>
    </div>
  );
}

export default App;
