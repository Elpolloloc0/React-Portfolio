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

const School = ({ info, direction }) => {
  
  const { theme, name, image, course, years, details } = info;

  if(direction ===  "right"){
    return (
      <SchoolContainer className={`${theme}`}>
        <SchoolDetailsContainer>
          <SchoolName>{name}</SchoolName>
          <SchoolCourse>{course}</SchoolCourse>
          <SchoolYear>{years}</SchoolYear>
          <SchoolDetails>{details}</SchoolDetails>
        </SchoolDetailsContainer>
      <SchoolImage src={`${image}`} alt={name} />
    </SchoolContainer>
    )
  }
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
