import ProductList from "./Components/ProductList.js";
import { GlobalStyle, Title, ShopImage } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "black",
  backgroundColor: "#fcfcfc",
  second: "red",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header>
        <Title>Fashion Store</Title>
        <ShopImage src="https://littleavenues.com/wp-content/uploads/2020/10/1A9C8DA2-CA9D-4112-B8FC-AFF057FD8163.jpeg" />
      </header>

      <ProductList />
    </ThemeProvider>
  );
}

export default App;
