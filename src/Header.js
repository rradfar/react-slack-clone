import styled from 'styled-components';
import React from 'react';

function Header() {
  return (
    <HeaderContainer>
      <h1>Test</h1>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  color: red;
`;
