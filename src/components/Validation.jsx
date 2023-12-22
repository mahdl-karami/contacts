import styled from "styled-components";
const ValidBox = styled.div`
  color: red;
`;

export default function Validation({valid}) {
  return (
    <ValidBox style={{visibility:`${valid ? "hidden" : "visible"}`}}>
      <h1>Enter valid data</h1>
    </ValidBox>
  );
}
