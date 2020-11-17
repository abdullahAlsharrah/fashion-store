import { DeleteButtonStyled } from "../../styles";
import productStore from "../../stores/productStore";
const DeleteButton = ({ productId }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    productStore.deleteProduct(productId);
  };
  return (
    <div>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </div>
  );
};

export default DeleteButton;
