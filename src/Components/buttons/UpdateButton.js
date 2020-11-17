import { useState } from "react";
import { UpdateButtonStyled } from "../../styles";
import ProductModal from "../modals/ProductModel";
const UpdateButton = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <ProductModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldProduct={product}
      />
    </>
  );
};

export default UpdateButton;
