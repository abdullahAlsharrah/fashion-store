import React, { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";
import productStore from "../../stores/productStore";

const ProductModal = ({ isOpen, closeModal, oldProduct }) => {
  const [product, setproduct] = useState(
    oldProduct
      ? oldProduct
      : {
          name: "",
          price: 0,
          description: "",
          img: "",
        }
  );

  const handleChange = (event) => {
    setproduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    productStore[oldProduct ? "updateProduct" : "createProduct"](product);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add Product"
    >
      <form onSubmit={handleSubmit}>
        {" "}
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              value={product.name}
              className="form-control"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              type="numbe"
              value={product.price}
              min="1"
              className="form-control"
              name="price"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            value={product.description}
            className="form-control"
            name="description"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            value={product.img}
            className="form-control"
            name="img"
            required
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldProduct ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default ProductModal;
