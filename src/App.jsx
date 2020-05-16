import React, { useState } from 'react';
import { AppContainer } from './styles/AppStyle';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Body from './components/layout/Body';
import { PageContext } from './context/PageContext';


const App = () => {
  const [page, setPage] = useState("About");

  return (
    <PageContext.Provider  value={{page, setPage}}>
      <AppContainer>
        <Header />
        <Body />
        <Footer />
      </AppContainer>
    </PageContext.Provider>
  );
}

export default App;
