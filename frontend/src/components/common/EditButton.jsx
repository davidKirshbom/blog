import penIcon from "../../assets/pen.svg";
const EditButton = ({ onClick }) => {
  return (
    <button
      className="text-xs text-indigo-600 mr-2 float-right"
      onClick={onClick}
    >
      <img
        src={penIcon}
        className="h-4 w-4 dark:filter dark:invert"
        alt="edit"
      />
    </button>
  );
};

export default EditButton;
