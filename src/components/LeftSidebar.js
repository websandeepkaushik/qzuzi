import React from 'react';
import styled from 'styled-components';

/**
 * This the LeftSidebar component
 */
const LeftSidebar = ({location}) => {
  
  return (
    <LeftSidebarSection>Left Sidebar</LeftSidebarSection>
  );
};

export default LeftSidebar;

export const LeftSidebarSection = styled.div`
  padding: 10px 20px;
  width: 20%;
  border-right: 1px solid #AAA;
  @media (max-width: 700px) {
    width: 100%;
  }
`;