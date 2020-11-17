import ProductsItems from "./ProductItem";
// import products from "./Products";
import { Container } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";
import { observer } from "mobx-react";
import productStore from "../stores/productStore";

const ProductList = () => {
  const [query, setQuery] = useState("");

  const productslist = productStore.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductsItems product={product} key={product.id} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <AddButton />
      <Container>{productslist}</Container>
    </>
  );
};

export default observer(ProductList);
