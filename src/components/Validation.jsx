// import libraryes
import styled from "styled-components";
// creating styled components
const ValidBox = styled.div`
  background: #ff000022;
  border-radius: 10px;
  text-align: left;
  padding: 0.8rem 0.8rem;
  color: #e00000;
  h5 {
    margin: 0;
    padding: 0;
  }
  margin-bottom: 2rem;
`;
// start main app
export default function Validation({ valid }) {
  // returning app
  return (
    <ValidBox style={{ visibility: `${valid ? "hidden" : "visible"}` }}>
      <h5>Enter valid data</h5>
    </ValidBox>
  );
}
