import React from 'react';
import { 
  ProjectSpaceContainer,  
  ProjectTitle,
  ProjectImage,
  ProjectInfoWrapper,
  ProjectTextWrapper,
  JobTitle,
  JobTime,
  ProjectDescription
} from './styles/ProjectSpaceStyles';

const ProjectSpace = ({ project, type }) => {
  const { text, image } = project;
  
  return (
    <ProjectSpaceContainer>
      <ProjectTitle>{text}</ProjectTitle>
      <ProjectInfoWrapper>
        <ProjectImage src={image} />
        <ProjectTextWrapper>
          {type && <JobTitle>{project.jobTitle}</JobTitle>}
          {type && <JobTime>{project.jobTime}</JobTime>}
          <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectTextWrapper>
      </ProjectInfoWrapper>
    </ProjectSpaceContainer>
  )
}

export default ProjectSpace;
