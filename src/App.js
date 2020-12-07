import { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { GlobalStyle, ThemButton } from "./styles";
import { ThemeProvider } from "styled-components";
import ProductList from "./Components/ProductList.js";
import ProductDetails from "./Components/ProductDetails";
import Home from "./Components/Home";
import VendorList from "./Components/VendorList";
import VendorDetails from "./Components/VendorDetails";
import Navbar from "./Components/Navbar";

const theme = {
  light: {
    mainColor: "black",
    backgroundColor: "#fcfcfc",
    second: "#ca0815",
    borderColor: "#8e8c8c",
    boxShadow: "0 0 21.25px 3.75px rgba(0, 0, 0, 0.25)",
  },
  dark: {
    mainColor: "#fcfcfc",
    backgroundColor: "black",
    second: "#ca0815",
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
    <>
      <Navbar />
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <ThemButton onClick={changeTheme}>Dark Mode</ThemButton>
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Vendors">Vendors</Link>
        <Switch>
          <Route path="/vendors/:vendorName">
            <VendorDetails />
          </Route>
          <Route path="/vendors">
            <VendorList />
          </Route>
          <Route path="/products/:productName">
            <ProductDetails />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
