import styled from "styled-components";
import colors from "../variables";

const Foote = styled.footer`
  height: 15rem;
  border: 2px solid red;
`;

function Footer() {
  return (
    <Foote> footer </Foote>
  );
}

export default Footer;
