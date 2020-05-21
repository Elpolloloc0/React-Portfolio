import React from 'react';
import { AreaContainer, AreaTitle } from '../layout/styles/BodyStyle';
import { SchoolsContainer } from './styles/EducationStyle';
import School from './School';
import { 
  MentorObject,
  WarringtonObject,
  LiverpoolObject
} from "./SchoolObjects";

const Education = () => {
  return (
    <AreaContainer>
      <AreaTitle>Education</AreaTitle>
      <SchoolsContainer>
        <School info={MentorObject} direction="left" />
        <School info={WarringtonObject} direction="right" />
        <School info={LiverpoolObject} direction="left" />
      </SchoolsContainer>
    </AreaContainer>
  )
}

export default Education;