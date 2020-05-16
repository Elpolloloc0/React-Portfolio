import styled from "styled-components";

export const NavContainer  = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;  
  width: 100%;
  color: white;
`;

export const NavLink = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: lawngreen;
  }

  &.nav-active {
    color: red;
    text-decoration: underline;
  }
`;