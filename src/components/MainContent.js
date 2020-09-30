import React from 'react';
import styled from 'styled-components';
import ShoppingList from './SoppingList';
import Sort from './Sort';

/**
 * This the MainContent component
 */
const MainContent = () => {
  return (
    <MainContainer>
        <Sort />
        <ShoppingList />
    </MainContainer>
  );
};

export default MainContent;

export const MainContainer = styled.div`
    width: 80%;
    padding: 20px 0 0 10px;
`;