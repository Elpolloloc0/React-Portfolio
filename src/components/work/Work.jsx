import React, { useState } from 'react';
import { AreaContainer, AreaTitle } from '../layout/styles/BodyStyle';
import { 
  WorkContainer, 
  WorkSideBar,
  WorkMainArea,
  SideBarLink
} from './styles/WorkStyle';
import WorkHistory from './WorkHistory';
import ProjectHistory from './ProjectHistory';

const Work = () => {

  const [content, setContent] = useState("Jobs");

  return (
    <AreaContainer>
      <AreaTitle>Work</AreaTitle>
      <WorkContainer>
        <WorkSideBar>
          <SideBarLink
            className={content === "Jobs" ? "work-active" : ""}
            onClick={() => setContent("Jobs")}
          >
            Jobs
          </SideBarLink>
          <SideBarLink
            className={content === "Projects" ? "work-active" : ""}
            onClick={() => setContent("Projects")}
          >
            Projects
          </SideBarLink>
        </WorkSideBar>
        <WorkMainArea>
          {content === "Jobs" ? <WorkHistory /> : <ProjectHistory />}
        </WorkMainArea>
      </WorkContainer>
    </AreaContainer>
  )
}

export default Work;
