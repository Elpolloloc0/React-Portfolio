import React, { useState } from 'react';
import { 
  EducationContainer, 
  Title,
  SchoolsContainer
} from './styles/EducationStyle';
import School from './School';
import EducationOverlay from './EducationOverlay';


const Education = () => {
  const[infoPanel, setInfoPanel] = useState("");

  return (
    <EducationContainer>
      <Title>Education</Title>
      <EducationOverlay state={infoPanel} setState={setInfoPanel}/>
      <SchoolsContainer>
        <School 
          name="Mentor High School" 
          image="/images/Mentor_Cardinals_Logo.jpg" 
          years="2008-2011"
          location="Mentor"
          setState={setInfoPanel}
        />
        <hr/>
        <School 
          name="Warrington & Vale Royal College" 
          image="/images/Warrington.png" 
          years="2012-2014"
          location="Warrington"
          setState={setInfoPanel}
        />
        <hr/>
        <School 
          name="University of Liverpool" 
          image="/images/UniOfLiverpool.png" 
          years="2015-2019"
          location="Liverpool"
          setState={setInfoPanel}
        />
      </SchoolsContainer>
    </EducationContainer>
  )
}

export default Education;