import React, { useContext } from 'react';
import { BodyContainer } from './styles/BodyStyle';
import { PageContext  } from "../../context/PageContext";
import About from "../about/About";
import Education from "../education/Education";
import Work from "../work/Work";
import Contact from "../contact/Contact";

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
        {renderPage()}
    </BodyContainer>
  )
}

export default Body;
