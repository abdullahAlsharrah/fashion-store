import products from "./ProductList";
import styles from "./styles";

function App() {
  const productList = products.map((product) => (
    <div>
      <img style={styles.productImg} src={product.img} />
      <p>{product.name}</p>
      <p>{product.price}KD</p>
    </div>
  ));
  return (
    <div>
      <header>
        <h1 style={styles.textCenter}>Fashion Store</h1>
        <img
          style={styles.imgCen}
          src="https://littleavenues.com/wp-content/uploads/2020/10/1A9C8DA2-CA9D-4112-B8FC-AFF057FD8163.jpeg"
        />
      </header>
      <div style={styles.container}>{productList}</div>
    </div>
  );
}

export default App;
