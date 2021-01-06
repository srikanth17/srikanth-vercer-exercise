import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const HeaderWrapper = styled.div`
  background: ${theme.palette.background.header};
  padding: ${theme.spacing(8)};
  margin-bottom: ${theme.spacing(8)};
`;

const HeaderTitle = styled.h1`
  color: ${theme.palette.text.header};
  margin: 0;
`;

const Header = () => (
  <HeaderWrapper>
    <div className="container">
      <HeaderTitle>Vercer Application</HeaderTitle>
    </div>
  </HeaderWrapper>
);

export default Header;
