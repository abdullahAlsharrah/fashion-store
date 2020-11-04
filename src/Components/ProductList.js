import ProductsItems from "./ProductItem";
import products from "./Products";
import { Container } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";

const ProductList = () => {
  const [query, setQuery] = useState("");
  const productslist = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductsItems product={product} key={product.id} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <Container>{productslist}</Container>
    </>
  );
};

export default ProductList;
