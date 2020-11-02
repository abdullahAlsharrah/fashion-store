import ProductsItems from "./ProductItem";
import products from "./Products";
import { Container } from "../styles";

const ProductList = () => {
  const productslist = products.map((product) => (
    <ProductsItems product={product} />
  ));
  return <Container>{productslist}</Container>;
};

export default ProductList;
