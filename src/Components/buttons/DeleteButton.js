import { DeleteButtonStyled } from "../../styles";
const DeleteButton = ({ productId, deleteProduct }) => {
  const handleDelete = () => {
    deleteProduct(productId);
  };
  return (
    <div>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </div>
  );
};

export default DeleteButton;
