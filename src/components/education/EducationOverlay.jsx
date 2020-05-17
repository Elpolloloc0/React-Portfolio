import React from 'react';
import { CSSTransition } from "react-transition-group";
import { EducationOverlayContainer } from './styles/EducationOverlayStyle'
import SchoolInfo from "./SchoolInfo";
import SchoolObject from "./SchoolObjects";

const EducationOverlay = ({ state, setState }) => {
  return (
    <CSSTransition
      in={state !== ""}
      timeout={500}
      classNames={"info"}
      appear
      unmountOnExit
    >
      <EducationOverlayContainer onClick={() => setState("")}>
        <SchoolInfo info={SchoolObject(state)}/> 
      </EducationOverlayContainer>
    </CSSTransition>
  )
}

export default EducationOverlay
