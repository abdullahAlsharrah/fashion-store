import { makeObservable, observable, action } from "mobx";
import axios from "axios";
import slugify from "react-slugify";

class ProductStore {
  products = [];

  constructor() {
    makeObservable(this, {
      products: observable,
      createProduct: action,
      deleteProduct: action,
      fetchProducts: action,
    });
  }

  fetchProducts = async () => {
    const response = await axios.get("http://localhost:8000/products");
    this.products = response.data;
  };

  createProduct = (newProduct) => {
    newProduct.id = this.products[this.products.length - 1].id + 1;
    newProduct.slug = slugify(newProduct.name);
    this.products.push(newProduct);
  };
  updateProduct = (updatedProduct) => {
    const product = this.products.find(
      (product) => product.id === updatedProduct.id
    );
    for (const key in product) product[key] = updatedProduct[key];
    product.slug = slugify(product.name);
  };

  deleteProduct = (productId) => {
    this.products = this.products.filter((product) => product.id !== productId);
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();
export default productStore;
