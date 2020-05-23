import styled from "styled-components";

export const SchoolContainer = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 5rem;

  &.mentor {
    background-color: #1f2833;
    color: white;
  }
  &.warrington {
    background-color: #C5c6c7;
    color: black;
    padding-left: 0;
    padding-right: 5rem;
  }
  &.liverpool {
    background-color: #272727;
    color: white;
  }
`;

export const SchoolDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5rem;
  margin-right: 5rem;
  width: 100%;
`;

export const SchoolImage = styled.img`
  width: 50rem;
  // height: 20rem;
  border: 3px solid #45a29e;
`

export const SchoolName = styled.h2`
  font-size: 3rem;
`;

export const SchoolCourse = styled.h3`
  margin-top: -1.5rem;
  font-size: 1.5rem;
`

export const SchoolYear = styled.h3`
  margin-top: -1rem;
  font-style: italic;
  font-size: 1.5rem;
`

export const SchoolDetails = styled.span`
  font-size: 1.25rem;
  text-align: center;
`