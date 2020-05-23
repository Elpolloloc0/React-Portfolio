import styled from "styled-components";

export const WorkContainer = styled.div`
  display: flex; 
  margin-left: 5rem;
  margin-right: 5rem;
`;

export const WorkSideBar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: fit-content;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #1f2833;
`;

export const SideBarLink = styled.span`
  margin-left: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: white;
  }

  &.work-active {
    color: red;
    &:hover {
      color: white;
    }
  }

`;

export const WorkMainArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7;
  height: fit-content;
  background-color:  #C5c6c7;
`;