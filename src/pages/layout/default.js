import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header';

const Default = ({ children }) => {
  return (
    <PageContainer fluid="true">
        <Header />
        {children}
    </PageContainer>
  );
};

export default Default;

export const PageContainer = styled(Container)`
  height: 100%;
  width: 100%;
`;