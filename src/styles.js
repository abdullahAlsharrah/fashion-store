import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
  `;

const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
const ThemButton = styled.button`
  font-size: 1em;
  border: 2px;
  border-style: solid;
  border-radius: 7%;
  border-color: ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;
const Product = styled.div`
  margin: 20px 10px 20px 10px;
  border: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.borderColor};
  overflow: hidden;
  border-radius: 5%;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  /* .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: black;
  } */

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

export {
  GlobalStyle,
  Product,
  Container,
  ShopImage,
  Title,
  ThemButton,
  SearchBarStyled,
};
