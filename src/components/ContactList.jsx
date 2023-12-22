// import libraryes
import styled from "styled-components";
// import icons
import mailIcon from "../../public/mail.svg";
import phoneIcon from "../../public/phone.svg";
import deleteIcon from "../../public/delete.svg";
// creating styled components
const Contacts = styled.div`
  width: 100%;
  box-shadow: 0 0 15px #e2e2e29e;
  padding: 1rem 2rem;
  border-radius: 10px;
  color: #6c757d;
`;
const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #6c757d34;
  border-radius: 10px;
  padding: 0.6rem 1rem;
  margin: 0.4rem 0;
`;
const Span = styled.span`
  width: calc(100% / 3);
  text-align: left;
  font-size: 1.2rem;
  font-weight: 500;
`;
const Del = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;
// start main app
export default function ContactList({ contacts, delHandler }) {
  // returning app
  return (
    <Contacts>
      {!contacts.length && <h2>Contacts List Is Empty</h2>}
      {contacts.map(({ firstName, lastName, email, phoneNumber, id }) => (
        <ContactItem key={id}>
          <Span>
            {firstName} {lastName}
          </Span>
          <Span>
            <img src={mailIcon} alt="Icone" />
            {email}
          </Span>
          <Span>
            <img src={phoneIcon} alt="Icone" />
            {phoneNumber}
          </Span>
          <Del onClick={() => delHandler(id)}>
            <img src={deleteIcon} alt="Icone" />
          </Del>
        </ContactItem>
      ))}
    </Contacts>
  );
}
