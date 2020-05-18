import React from 'react';
import { 
  EducationContainer, 
  Title,
  SchoolsContainer
} from './styles/EducationStyle';
import School from './School';
import { 
  MentorObject,
  WarringtonObject,
  LiverpoolObject
} from "./SchoolObjects";

const Education = () => {
  return (
    <EducationContainer>
      <Title>Education</Title>
      <SchoolsContainer>
        <School info={MentorObject} />
        <School info={WarringtonObject} />
        <School info={LiverpoolObject} />
      </SchoolsContainer>
    </EducationContainer>
  )
}

export default Education;