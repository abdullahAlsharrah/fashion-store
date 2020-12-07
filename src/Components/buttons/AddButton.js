import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import ProductModal from "../modals/ProductModal";
const AddButton = ({ createProduct }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <div>
      <>
        <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
        <ProductModal
          isOpen={isOpen}
          closeModal={closeModal}
          createProduct={createProduct}
        />
      </>
    </div>
  );
};

export default AddButton;
