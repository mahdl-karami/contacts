// import libraryes
import styled from "styled-components";
// creating styled components
const Form = styled.form`
  width: 100%;
  box-shadow: 0 0 20px #e2e2e29b;
  border-radius: 10px;
  padding: 1rem 2rem;
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  width: calc(50% - 1rem);
  margin: 0.5rem 0.5rem;
  border: 2px solid #6c757d7f;
  padding: 0.4rem 0.8rem;
  outline: none;
  border-radius: 10px;
  font-weight: bold;
  color: #6c757d;
  &:focus {
    border: 2px solid #007bff;
  }
  &::placeholder {
    font-weight: bold;
    color: #6c757db5;
  }
`;
const Submit = styled.button`
  width: 100%;
  border: 2px solid #007bff;
  margin: 0.5rem 0.5rem;
  padding: 0.4rem 0.8rem;
  background: #007bff;
  border-radius: 10px;
  color: #fff;
  font-weight: 500;
`;
// start main app
export default function FormBody({ submitHandler, changeHandler, contact }) {
  // set states
  const inputs = [
    { name: "firstName", type: "text", placeHolder: "First Name", id: 0 },
    { name: "lastName", type: "text", placeHolder: "Last Name", id: 1 },
    { name: "email", type: "email", placeHolder: "Email", id: 2 },
    { name: "phoneNumber", type: "number", placeHolder: "Phone Number", id: 3 },
  ];
  // returning app
  return (
    <Form onSubmit={submitHandler}>
      {inputs.map(({ name, id, type, placeHolder }) => (
        <Input key={id} type={type} placeholder={placeHolder} name={name} onChange={changeHandler} value={contact[name]}></Input>
      ))}
      <Submit type="submit">Add Contact</Submit>
    </Form>
  );
}
