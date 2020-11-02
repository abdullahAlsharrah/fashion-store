import { Product } from "../styles";

const ProductsItem = (Prop) => {
  return (
    <Product>
      <div>
        <img
          src={Prop.product.img}
          onMouseOver={(e) => (e.currentTarget.src = Prop.product.ovr)}
          onMouseOut={(e) => (e.currentTarget.src = Prop.product.img)}
        />
      </div>
      <p>{Prop.product.name}</p>
      <p className="price">{Prop.product.price} KD</p>
    </Product>
  );
};

export default ProductsItem;
