import styled from "styled-components";

export const SchoolContainer = styled.div`
  display: flex;
  align-items: center;
  height: 10rem;
`

export const SchoolDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5rem;
  width: 20vw;
`;

export const SchoolImage = styled.img`
  width: 10rem;
`

export const SchoolName = styled.h2`
  text-decoration: underline;
`;

export const SchoolYear = styled.span`
  font-style: italic;
`

export const SchoolInfoButton = styled.button`
  margin-left: 5rem;
  background-color: darkgrey;
  color: white;
  border: 0.02rem solid darkgrey;
  height: 3rem;
  width: 10rem;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  cursor: pointer;
`