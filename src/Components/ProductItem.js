import { Product } from "../styles";
import { Link } from "react-router-dom";
import DeleteButton from "./buttons/DeleteButton";

const ProductsItem = ({ product, deleteProduct }) => {
  return (
    <>
      <Product>
        <div>
          {/* <div className="overlay">hello</div> */}
          <Link to={`/products/${product.id}`}>
            <img
              src={product.img}
              alt=""
              onMouseOver={(e) => (e.currentTarget.src = product.ovr)}
              onMouseOut={(e) => (e.currentTarget.src = product.img)}
            />
          </Link>

          <p>{product.name}</p>
          <p className="price">{product.price} KD</p>
        </div>
        <DeleteButton productId={product.id} deleteProduct={deleteProduct} />
      </Product>
    </>
  );
};

export default ProductsItem;
