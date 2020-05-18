import React from 'react';
import { 
  SchoolContainer,
  SchoolDetailsContainer,
  SchoolImage,
  SchoolName,
  SchoolCourse,
  SchoolYear,
  SchoolDetails
} from './styles/SchoolStyle';

const School = ({ info }) => {
  
  const { theme, name, image, course, years, details } = info;

  return (
    <SchoolContainer className={`${theme}`}>
      <SchoolImage src={`${image}`} alt={name} />
      <SchoolDetailsContainer>
        <SchoolName>{name}</SchoolName>
        <SchoolCourse>{course}</SchoolCourse>
        <SchoolYear>{years}</SchoolYear>
        <SchoolDetails>{details}</SchoolDetails>
      </SchoolDetailsContainer>
    </SchoolContainer>
  )
}

export default School;
