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
      updateProduct: action,
    });
  }

  fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      this.products = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  createProduct = async (newProduct) => {
    // newProduct.id = this.products[this.products.length - 1].id + 1;
    // newProduct.slug = slugify(newProduct.name);
    // this.products.push(newProduct);
    try {
      const formData = new FormData();
      for (const key in newProduct) formData.append(key, newProduct[key]);
      const res = await axios.post("http://localhost:8000/products", formData);
      this.products.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  updateProduct = async (updatedProduct) => {
    try {
      const formData = new FormData();
      for (const key in updatedProduct)
        formData.append(key, updatedProduct[key]);
      await axios.put(
        `http://localhost:8000/products/${updatedProduct.id}`,
        formData
      );
      const product = this.products.find(
        (product) => product.id === updatedProduct.id
      );
      for (const key in product) product[key] = updatedProduct[key];
      product.slug = slugify(product.name);
    } catch (error) {
      console.log(error);
    }
  };

  deleteProduct = async (productId) => {
    console.log(productId);
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      this.products = this.products.filter(
        (product) => product.id !== productId
      );
    } catch (error) {
      console.log(error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();
export default productStore;
