import React from 'react';
import { HeaderContainer, HeaderName } from './styles/HeaderStyle';
import NavBar from '../nav/NavBar';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderName>Cieran</HeaderName>
      <NavBar />
    </HeaderContainer>
  )
}


export default Header;
