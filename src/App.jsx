// import libraryes
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import styled from "styled-components";
// import components
import FormBody from "./components/FormBody";
import ContactList from "./components/ContactList";
import Validation from "./components/Validation";
// creating styled components
const Container = styled.div`
  width: calc(1000px + 4rem);
  height: auto;
  margin: 2rem auto;
  text-align: center;
  color: #007bff;
  a {
    color: #007bff;
    &:hover {
      color: #0069da;
    }
    text-decoration: none;
  }
  h1 {
    font-weight: bold;
    margin: 2rem 0 1rem;
  }
`;
const Badge = styled.h5`
  display: inline;
  background: #007bff40;
  border-radius: 7px;
  padding: 0 0.4rem;
  margin: 0 0.2rem;
`;

// start main app
export default function App() {
  // set states
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    id: uuidV4(),
  });
  const [valid, setValid] = useState(true);
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
    setContacts([...contacts, contact]);
    setContact({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      id: uuidV4(),
    });
  };
  const delHandler = (id) => {
    const newContacts = contacts.filter((contactsItem) => contactsItem.id !== id);
    setContacts(newContacts);
  };
  // returning app
  return (
    <Container>
      <h1>Contact List</h1>
      <h5>
        Developer
        <a href="https://github.com/mahdl-karami" target="_blank" rel="noreferrer">
          <Badge>GitHub</Badge>
        </a>
        Page
      </h5>
      <FormBody submitHandler={submitHandler} changeHandler={changeHandler} contact={contact} />
      <Validation valid={valid} />

      <ContactList contacts={contacts} delHandler={delHandler} />
    </Container>
  );
}
