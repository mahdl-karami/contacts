import { useState } from "react";
import styled from "styled-components";
import FormBody from "./components/FormBody";
import ContactList from "./components/ContactList";
import Validation from "./components/Validation";
import { v4 as uuidV4 } from "uuid";
const Container = styled.div`
  width: 800px;
  height: auto;
  margin: 0 auto;
`;
export default function App() {
  // set states
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    id: uuidV4(),
  });
  const [valid, setValid] = useState(false);
  const [contacts, setContacts] = useState([]);
  // set functions
  const changeHandler = ({ target: { name, value } }) => {
    setContact((contact) => ({ ...contact, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phoneNumber } = contact;
    if (!firstName || !lastName || !email || !phoneNumber) {
      setValid(false);
      return;
    }
    setValid(true);
    setContact((contact) => ({ ...contact, ["id"]: uuidV4() }));
    setContacts([...contacts, contact]);
    console.log(contacts);
  };
  const delHandler = (id) => {
    const newContacts = contacts.filter((contactsItem)=> contactsItem.id !== id );
    setContacts(newContacts);
  };
  return (
    <Container>
      <h1>Contact List</h1>
      <h4>
        Deleloper{" "}
        <a href="https://github.com/mahdl-karami" target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        Page
      </h4>
      <FormBody submitHandler={submitHandler} changeHandler={changeHandler} contact={contact} />
      <Validation valid={valid} />

      <ContactList contacts={contacts} delHandler={delHandler} />
    </Container>
  );
}
