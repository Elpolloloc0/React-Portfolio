import styled from 'styled-components';

export const ProjectSpaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1rem solid #C5c6c7;
  color: #FFFFFF;
`;

export const ProjectHR = styled.hr`
  width: 100%;
  margin-top: 3rem;
  color: #45a29e;
  height: 1rem;
`;

export const ProjectTitle = styled.h2`
  font-size: 2rem;
`;

export const ProjectImage = styled.img`
  border: 3px solid #272727;
  width: 15rem;
`;

export const ProjectInfoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const ProjectTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
`; 

export const JobTitle = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const JobTime = styled.span`
  margin-top: 1rem;
  font-style: italic;
  font-size: 1.2rem;
`;

export const ProjectDescription = styled.span`
  margin-top: 1rem;
`;