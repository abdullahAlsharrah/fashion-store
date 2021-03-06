import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    /* margin: 5%; */
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
  `;
export const UpdateButtonStyled = styled.p`
  text-align: center;
  cursor: pointer;
  color: ${(props) => props.theme.second};

  &:hover {
    color: ${(props) => props.theme.second};
  }
`;
export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
export const GoBackButton = styled.button`
  margin-top: 2%;
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
export const DeleteButtonStyled = styled.p`
  text-align: center;
  cursor: pointer;
  color: ${(props) => props.theme.second};

  &:hover {
    color: ${(props) => props.theme.second};
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const ThemButton = styled.button`
  font-size: 1em;
  margin: 0px 0 0 40px;

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
export const Product = styled.div`
  display: inline-block;
  position: relative;
  margin: 20px 10px 20px 10px;
  border: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.borderColor};
  overflow: hidden;
  border-radius: 5%;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    cursor: pointer;
  }

  /* .overlay {
    display: none;

    &:hover {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      z-index: 100;
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: black;
    }
  } */
  .imov {
    width: 188px;
    height: 222px;
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
export const Vendor = styled.div`
  display: inline-block;
  position: relative;
  margin: 20px 10px 20px 10px;
  border: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.borderColor};
  overflow: hidden;
  /* border-radius: 5%; */

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    cursor: pointer;
  }

  /* .overlay {
    display: none;

    &:hover {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      z-index: 100;
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: black;
    }
  } */
  .imov {
    width: 188px;
    height: 222px;
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
export const DetailWrapper = styled.div`
  margin-top: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }
  h1 {
    text-align: left;
    margin-left: 50%;
  }
  h4 {
    text-align: left;
    margin-left: 50%;
  }
  p {
    text-align: left;
    margin-left: 50%;
    &.price {
      font-size: 20px;
      font-weight: 500;
      color: ${(props) => props.theme.second};
    }
  }
  hr {
    width: 30%;
    margin-left: 50%;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 300px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 300px;
`;

export const Title = styled.h1`
  text-align: center;
`;
