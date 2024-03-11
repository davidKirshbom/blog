import { createComment } from "../../server/comment";
import Comment from "./Comment";
import OneInputForm from "../form/OneInputForm";
import useAuth from "../../hooks/useAuth";

const CommentsContainer = ({ comments, postId }) => {
  const { user } = useAuth();
  const handleCreateCommentSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await createComment(data, postId, user?.token);
    navigation(0);
  };

  return (
    <div className="relative  w-full mt-3">
      <h1 className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 dark:text-gray-300 -top-1.5 flex h-full w-full select-none text-xl leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[16.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[16.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Comments
      </h1>
      <div className=" mt-[1.1rem] rounded-tr-md rounded-tl-md w-[97%] mx-auto">
        {comments?.map((comment) => {
          return (
            <Comment
              comment={comment}
              isManageable={comment?.author?.id == user?.user?.id}
              key={comment?.id}
            />
          );
        })}
        <OneInputForm
          inputProps={{ name: "content", placeholder: "Add a comment" }}
          onSubmit={handleCreateCommentSubmit}
          submitText="Add"
        />
      </div>
    </div>
  );
};

export default CommentsContainer;
