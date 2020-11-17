import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import productStore from "../stores/productStore";
import { observer } from "mobx-react";
import UpdateButton from "./buttons/UpdateButton";

const ProductDetails = () => {
  const productName = useParams().productName;
  const product = productStore.products.find(
    (_product) => _product.slug === productName
  );

  if (!product) return <Redirect to="/products" />;

  return (
    <>
      <DetailWrapper>
        <img src={product.img} alt={product.name} />
        <h1>{product.name}</h1>
        <p className="price">{product.price} KD</p>
        <hr />
        <div>
          <h4>Description</h4>
          <p>{product.description}</p>
        </div>
        <UpdateButton product={product} />
        <DeleteButton productId={product.id} />
      </DetailWrapper>
    </>
  );
};

export default observer(ProductDetails);
