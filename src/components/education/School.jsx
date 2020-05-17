import React from 'react';
import { 
  SchoolContainer,
  SchoolDetailsContainer,
  SchoolImage,
  SchoolName,
  SchoolYear,
  SchoolInfoButton
} from './styles/SchoolStyle';

const School = ({ name, image, years, location, setState}) => {

  return (
    <SchoolContainer>
      <SchoolImage src={`${image}`} alt={name} />
      <SchoolDetailsContainer>
        <SchoolName>{name}</SchoolName>
        <SchoolYear>{years}</SchoolYear>
      </SchoolDetailsContainer>
      <SchoolInfoButton onClick={() => setState(location)}>Info</SchoolInfoButton>
    </SchoolContainer>
  )
}

export default School;
