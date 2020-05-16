import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;  
  color: white;
`;

export const NavLink = styled.span`
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: grey;
  }

  &.nav-active {
    color: red;
    text-decoration: underline;
  }
`;