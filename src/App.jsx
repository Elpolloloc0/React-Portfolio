import React, { useState } from 'react';
import { AppContainer } from './styles/AppStyle';
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';
import { PageContext } from './context/PageContext';

const App = () => {
  const [page, setPage] = useState("Education");

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
