import React from 'react';
import styled from 'styled-components';
import { LeftSidebar, MainContent } from '../components';
import Default from './layout/default';

/**
 * This the Home page
 */
const Home = ({location}) => {
  return (
    <Default>
        <PageContainer>
            <LeftSidebar {...{location}} />
            <MainContent />
        </PageContainer>
        <PageFooter><b>Developed by:</b> Sandeep Kaushik</PageFooter>
    </Default>
  );
};

export default Home;

export const PageContainer = styled.div`
  display: flex;
  @media (max-width: 700px) {
    display: block;
 }
`;

export const PageTitle = styled.h1`
  margin: 0 0 10px 0;
  font-size: 20px;
`

export const PageFooter = styled.div`
 text-align: center;
 padding: 10px 0;
`;