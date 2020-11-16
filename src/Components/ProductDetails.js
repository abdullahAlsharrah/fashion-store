import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
const ProductDetails = ({ products, deleteProduct }) => {
  const productName = useParams().productName;
  const product = products.find((_product) => _product.id === +productName);

  if (!product) return <Redirect to="/products" />;

  const handleDelete = (productId) => {
    deleteProduct(productId);
  };
  return (
    <>
      <DetailWrapper>
        <h1>{product.name}</h1>
        <img src={product.img} alt={product.name} />
        <p>{product.description}</p>
        <p className="price">{product.price} KD</p>
        <DeleteButton productId={product.id} deleteProduct={handleDelete} />
      </DetailWrapper>
    </>
  );
};

export default ProductDetails;
