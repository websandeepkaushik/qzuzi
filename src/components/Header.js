import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Header = () => {
    return(
        <HeaderSection>
            <Row>
                <Col md={6}>
                    <Link to="/">Logo</Link>
                </Col>
                <Col md={6}>Header Right</Col>
        </Row>
      </HeaderSection>
    )
}

export default Header;

export const HeaderSection = styled.div`
    background: blue;
    padding: 10px;
`;