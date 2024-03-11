import trashIcon from "../../assets/trash.svg";

const DeleteButton = ({ onClick }) => {
  return (
    <button className="text-xs text-red-500 float-right" onClick={onClick}>
      <img
        src={trashIcon}
        className="h-4 w-4  dark:filter dark:fill-red-500   "
        alt="delete"
      />
    </button>
  );
};
export default DeleteButton;
