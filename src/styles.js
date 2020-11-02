import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
  `;
const Product = styled.div`
  margin: 20px 10px 20px 10px;
  border: 2px;
  border-style: solid;
  border-color: #f2f2f2;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 21.25px 3.75px rgba(0, 0, 0, 0.25);
  }

  p {
    margin-top: 2px;
    height: 8px;
    margin-left: 10px;
    &:hover {
      color: ${(props) => props.theme.second};
    }

    &.price {
      color: ${(props) => props.theme.second};
    }
  }

  img {
    width: 188px;
    height: 222px;
  }
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 300px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 300px;
`;

const Title = styled.h1`
  text-align: center;
`;

export { GlobalStyle, Product, Container, ShopImage, Title };
