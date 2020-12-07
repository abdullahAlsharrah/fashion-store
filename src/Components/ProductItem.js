import { Product } from "../styles";
import { Link } from "react-router-dom";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
import { observer } from "mobx-react";

const ProductsItem = ({ product }) => {
  return (
    <>
      <Product>
        <div>
          {/* <div className="overlay">hello</div> */}
          <Link to={`/products/${product.slug}`}>
            <img
              src={product.image}
              alt=""
              onMouseOver={(e) =>
                (e.currentTarget.src = product.ovr
                  ? product.ovr
                  : product.image)
              }
              onMouseOut={(e) => (e.currentTarget.src = product.image)}
            />
          </Link>

          <p>{product.name}</p>
          <p className="price">{product.price} KD</p>
        </div>
        <UpdateButton product={product} />
        <DeleteButton productId={product.id} />
      </Product>
    </>
  );
};

export default observer(ProductsItem);
