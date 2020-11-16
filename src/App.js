import { useState } from "react";
import { GlobalStyle, ThemButton } from "./styles";
import { ThemeProvider } from "styled-components";
import ProductList from "./Components/ProductList.js";
import ProductDetails from "./Components/ProductDetails";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import Home from "./Components/Home";
import products from "./Components/Products";
// import Navbar from "./Components/Navbar";

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
  const [_products, setProducts] = useState(products);
  const [currentTheme, setCurrentTheme] = useState("light");
  const changeTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  };
  const deleteProduct = (productId) => {
    const updatedProducts = _products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };
  const createProduct = (newProduct) => {
    setProducts([..._products, newProduct]);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      {/* <Navbar /> */}
      <ThemButton onClick={changeTheme}>Dark Mode</ThemButton>
      <Link to="/Products">Products</Link>
      <Switch>
        <Route path="/products/:productName">
          <ProductDetails products={_products} deleteProduct={deleteProduct} />;
        </Route>
        <Route path="/products">
          <ProductList
            products={_products}
            deleteProduct={deleteProduct}
            createProduct={createProduct}
          />
          ;
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
