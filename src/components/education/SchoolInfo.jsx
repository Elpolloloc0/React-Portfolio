import React from 'react';
import { 
  SchoolInfoContainer,
  SchoolInfoImage,
  SchoolInfoTitle,
  GradeInfo,
  SchoolDetails 
} from './styles/SchoolInfoStyle';

const SchoolInfo = ({ info }) => {
  const { image, name, grade, details} = info;
  return (
    <SchoolInfoContainer>
      <SchoolInfoImage src={`${image}`} alt={name} />
      <SchoolInfoTitle>{name}</SchoolInfoTitle>
      <GradeInfo>{grade}</GradeInfo>
      <SchoolDetails>{details}</SchoolDetails>
    </SchoolInfoContainer>
  )
}

export default SchoolInfo;
