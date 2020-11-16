import ProductsItems from "./ProductItem";
// import products from "./Products";
import { Container } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";

const ProductList = ({ products, deleteProduct, createProduct }) => {
  const [query, setQuery] = useState("");

  const productslist = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductsItems
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
      />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <AddButton createProduct={createProduct} />
      <Container>{productslist}</Container>
    </>
  );
};

export default ProductList;
