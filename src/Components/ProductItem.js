import { Product } from "../styles";

const ProductsItem = (Prop) => {
  return (
    <Product>
      <img
        src={Prop.product.img}
        alt=""
        onMouseOver={(e) => (e.currentTarget.src = Prop.product.ovr)}
        onMouseOut={(e) => (e.currentTarget.src = Prop.product.img)}
      />
      <p>{Prop.product.name}</p>
      <p className="price">{Prop.product.price} KD</p>
      {/* <div className="overlay">hello</div> */}
    </Product>
  );
};

export default ProductsItem;

// 1- wakeup.     2- wo 3- breakfast. rk.   4- lunch   6- sleep.     5- gym       7- go out with my wife.      8- Playstation
// (7am)           (7-8:30-2)                 (2:30)    (3-4)        (4:30-6)           (7-9)                     (9:30-12)
