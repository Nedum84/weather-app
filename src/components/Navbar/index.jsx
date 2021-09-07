import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ICONS } from "../../utils/icons";

function Navbar() {
  const history = useHistory();

  return (
    <Nav>
      <button onClick={() => history.goBack()}>
        <img alt="back" src={ICONS.backArrow} />
      </button>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  button {
    background: transparent;
    border: none;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;
