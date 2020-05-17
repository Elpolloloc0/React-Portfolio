import styled from "styled-components";

export const EducationContainer = styled.div`
  display: flex;
  flex: 8;
  flex-direction: column;
  overflow: auto;

  .info-enter, .info-appear {
    opacity: 0.01;
    transform: translateY(-100%);
  }

  .info-enter-active, .info-appear-active {
    opacity: 1;
    transform: translateY(0%);
    transition: all 500ms ease-in-out;
  }

  .info-exit {
    opacity: 1;
    transform: translateY(0%);
  }

  .info-exit-active {
    opacity: 0.01;
    transform: translateY(-100%);
    transition: all 500ms ease-in-out;
  }
  
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-style: italic;
  margin-left: 5rem;
`;

export const SchoolsContainer = styled.div`

  display: flex;
  flex: 8;
  flex-direction: column;
  justify-content: space-evenly;
  border: 0.25rem solid black;
  padding-left: 5rem;
  padding-right: 5rem;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 5rem;

  hr {
    height: 0.1rem;
    width: 100%;
    color: black;
    background-color: black;
  }
`;