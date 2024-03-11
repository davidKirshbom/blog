import { useNavigate } from "react-router-dom";
import { deleteComment, editComment } from "../../server/comment";
import { useState } from "react";
import OneInputForm from "../form/OneInputForm";
import EditButton from "../common/EditButton";
import DeleteButton from "../common/DeleteButton";
import useAuth from "../../hooks/useAuth";
const Comment = ({ comment, isManageable }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { user } = useAuth();
  const navigation = useNavigate();
  const handleSubmitUpdateComment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await editComment(comment.id, data, user?.token);
    navigation(0);
  };
  const handleDeleteComment = async () => {
    const response = await deleteComment(comment?.id, user?.token);
    navigation(0);
  };
  return (
    <div
      key={comment?.id}
      className="dark:bg-gray-600 dark:text-gray-300 px-1 p-1 bg-gray-100 my-[2px] dark:my-0 dark:bg-transparent dark:border-b-2 border-b-gray-400"
    >
      {isManageable ? (
        <div className="ml-2">
          <DeleteButton onClick={handleDeleteComment} />
          {isEditMode ? (
            <></>
          ) : (
            <EditButton onClick={() => setIsEditMode(true)} />
          )}
        </div>
      ) : (
        <></>
      )}
      {!isEditMode ? (
        <p className="min-h-5">{comment.content}</p>
      ) : (
        <OneInputForm
          onSubmit={handleSubmitUpdateComment}
          inputProps={{
            defaultValue: comment?.content,
            name: "content",
            placeholder: "Add a comment",
          }}
          submitText="Save"
        />
      )}
      <p className=" text-xs ml-auto w-fit whitespace-nowrap ">
        by {comment.author?.username}
      </p>
    </div>
  );
};

export default Comment;
