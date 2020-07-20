import React from 'react';
import {  
  WorkHistoryContainer, 
  WorkHistoryTitle, 
  WorkArea
} from './styles/WorkHistory';
import ProjectSpace from './ProjectSpace';
import { BodcObject, YozuObject } from './WorkObjects';

const WorkHistory = () => {
  return (
    <WorkHistoryContainer>
      <WorkHistoryTitle>Work History</WorkHistoryTitle>
      <WorkArea>
        <ProjectSpace project={BodcObject} type="job" />
        <ProjectSpace project={YozuObject} type="job" />
      </WorkArea>
    </WorkHistoryContainer>
  )
}

export default WorkHistory;
