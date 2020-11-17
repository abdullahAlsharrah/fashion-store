import { makeObservable, observable, action } from "mobx";
import products from "../Components/Products";
import slugify from "react-slugify";

class ProductStore {
  products = products;

  constructor() {
    makeObservable(this, {
      products: observable,
      createProduct: action,
      deleteProduct: action,
    });
  }

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
export default productStore;