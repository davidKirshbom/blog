import { useState } from "react";
import { updatePost } from "../../server/posts";
import useAuth from "../../hooks/useAuth";
import PostForm from "../form/PostForm";
import { Link } from "react-router-dom";

import CommentsContainer from "../comments/CommentsContainer";
import EditButton from "../common/EditButton";
import { formatDate } from "../../utils/date";

const Post = ({ post, showCreatedBy, editable, showComments }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { user } = useAuth();

  const handleSubmitUpdatePost = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const updatedPost = {
      ...post,
      title: data.title,
      content: data.content,
    };
    const response = await updatePost(updatedPost, user?.token);
    setIsEditMode(false);
  };
  return (
    <div className="bg-white mx-auto  dark:bg-gray-900  shadow-md rounded-lg px-8 py-6    flex flex-col  flex-shrink w-full relative">
      {editable ? (
        <div className="absolute top-2 right-2">
          {isEditMode ? (
            <button
              onClick={() => setIsEditMode(false)}
              className="w-full flex justify-center px-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              X
            </button>
          ) : (
            <EditButton onClick={() => setIsEditMode(true)} />
          )}
        </div>
      ) : (
        <></>
      )}
      {isEditMode ? (
        <PostForm post={post} handleSubmit={handleSubmitUpdatePost} />
      ) : (
        <>
          <Link to={`/post/${post?.id}`}>
            <h1 className="text-gray-700 border-b-2 pb-2 dark:border-b-gray-700 text-xl dark:text-gray-300 ">
              {post?.title}
            </h1>
          </Link>
          <p className="text-gray-700 dark:text-gray-300 pt-2">
            {post?.content}
          </p>
          <div className="flex justify-between">
            <p className="text-gray-700 dark:text-gray-300 pt-2 text-sm">
              created by: {post?.author.username}
            </p>

            <p className="text-gray-700 dark:text-gray-300 pt-2 text-sm">
              {post.createdAt === post.updatedAt
                ? "created at:" + formatDate(post.createdAt)
                : "updated at:" + formatDate(post.updatedAt)}
            </p>
          </div>
        </>
      )}
      {showComments ? (
        <CommentsContainer comments={post?.comments} postId={post?.id} />
      ) : (
        <></>
      )}
    </div>
  );
};
export default Post;
