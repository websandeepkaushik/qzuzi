import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getProductList } from '../state/ProductList';

const ShoppingList = () => {
    const productList = useSelector(getProductList);
    console.log('productList--', productList);
    let key = -1;
    return (
        <ProductRow>
        {
            productList?.length > 0 &&
            productList.map(item => {
                key++;
                return (
                    <ItemCol key={`flight-${key}`}>
                        <ItemCell key={`flight-${key}`}>
                            <ItemImg>
                                <Image src={item.image} />
                            </ItemImg>
                            <H3>{item.name}</H3>
                            <PriceSection>
                                <Price>
                                    {item.price.actual}
                                    <b>{item.price.display}</b>
                                </Price>
                                <Discount>
                                    {`${item.discount}% off`}
                                </Discount>
                            </PriceSection>
                        </ItemCell>
                    </ItemCol>
                )
            })
        }
        
    </ProductRow>
    )
}

export default ShoppingList;


export const ProductRow = styled(Row)`
    margin: 0;
`;

export const ItemCol = styled(Col)`
flex: 0 0 20%;
max-width: 20%;
`;

export const ItemCell = styled.div`
    margin-bottom: 25px;
    height: 100%;
    img{
        width: 100%;
    }

`;

export const ItemImg = styled.div`
    background: #CCC;
    text-align: center;
    margin-bottom: 10px;
    // height: 150px;
`;

export const H3 = styled.h3`
    font-size: 13px;
    font-weight: bold;
    color: #24386e;
`;

export const PriceSection = styled.div`
    font-size: 13px;
    font-weight: bold;
    overflow: hidden;
`;

export const Price = styled.div`
    float: left;
    b{
        text-decoration: line-through;
        color: #777;
        margin-left: 8px;
    }
`;

export const Discount = styled.div`
    float: right;
    color: green;
`;