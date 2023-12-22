import styled from "styled-components";
const Form = styled.form``;
const Input = styled.input``;
const Submit = styled.button``;

export default function FormBody({ submitHandler, changeHandler, contact }) {
  const inputs = [
    { name: "firstName", type: "text", placeHolder: "First Name", id: 0 },
    { name: "lastName", type: "text", placeHolder: "Last Name", id: 1 },
    { name: "email", type: "text", placeHolder: "Email", id: 2 },
    { name: "phoneNumber", type: "text", placeHolder: "Phone Number", id: 3 },
  ];
  return (
    <Form onSubmit={submitHandler}>
      {inputs.map(({ name, id, type, placeHolder}) => (
        <Input key={id} type={type} placeholder={placeHolder} name={name} onChange={changeHandler} value={contact[name]}></Input>
      ))}
      <Submit type="submit">Submit</Submit>
    </Form>
  );
}
