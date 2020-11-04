import ProductList from "./Components/ProductList.js";
import { GlobalStyle, Title, ShopImage, ThemButton } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const theme = {
  light: {
    mainColor: "black",
    backgroundColor: "#fcfcfc",
    second: "red",
    borderColor: "#8e8c8c",
    boxShadow: "0 0 21.25px 3.75px rgba(0, 0, 0, 0.25)",
  },
  dark: {
    mainColor: "#fcfcfc",
    backgroundColor: "black",
    second: "red",
    borderColor: "#8e8c8c",
    boxShadow: "0 0 21.25px 3.75px rgba(250, 250, 250, 250)",
  },
};
function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const changeTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemButton onClick={changeTheme}>Dark Mode</ThemButton>
      <header>
        <Title>Fashion Store</Title>
        <ShopImage src="https://littleavenues.com/wp-content/uploads/2020/10/1A9C8DA2-CA9D-4112-B8FC-AFF057FD8163.jpeg" />
      </header>

      <ProductList />
    </ThemeProvider>
  );
}

export default App;
