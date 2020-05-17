import React, { useContext } from 'react';
import { 
  BodyContainer, 
  BodyTransition,
  BodyArea 
} from './styles/BodyStyle';
import { PageContext  } from "../../context/PageContext";
import About from "../about/About";
import Education from "../education/Education";
import Work from "../work/Work";
import Contact from "../contact/Contact";
import { CSSTransition } from 'react-transition-group';

const Body = () => {
  
  const { page } = useContext(PageContext);

  const renderPage = () => {
    if(page === "About") return <About />;
    if(page === "Education") return <Education />;
    if(page === "Work") return <Work />;
    if(page === "Contact") return <Contact />;
    return <About />;
  }

  return (
    <BodyContainer>
      <BodyTransition>
        <CSSTransition
          key={page}
          timeout={500}
          classNames={"page"}
        >
          <BodyArea>
            {renderPage()}
          </BodyArea>
        </CSSTransition>
      </BodyTransition>
    </BodyContainer>
  )
}

export default Body;
