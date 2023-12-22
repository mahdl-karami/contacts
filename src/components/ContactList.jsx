import styled from "styled-components";
const ContactItem = styled.div``;
const Span = styled.span``;
const Del = styled.button`
  
`
export default function ContactList({ contacts, delHandler }) {
  return (
    <div>
      {contacts.map(({ firstName, lastName, email, phoneNumber,id }) => (
        <ContactItem key={id}>
          <Span>{firstName} {lastName}</Span>
          <Span>{email}</Span>
          <Span>{phoneNumber}</Span>
          <Del onClick={()=>delHandler(id)}>X</Del>
        </ContactItem>
      ))}
    </div>
  );
}
