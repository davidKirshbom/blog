import { useQuery } from "@tanstack/react-query";
import PostsContainer from "../posts/PostsContainer";
import useAuth from "../../hooks/useAuth";
import { createPost, getPosts } from "../../server/posts";
import { useEffect, useState } from "react";
import PostForm from "../form/PostForm";
import { useNavigate } from "react-router-dom";
import OneInputForm from "../form/OneInputForm";
import Spinner from "../common/Spinner";

const initialQuery = { limit: 10, offset: 0, searchTerm: "" };
const PostsPage = ({ loggedUser }) => {
  const { user } = useAuth();
  const navigation = useNavigate();
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState(initialQuery);
  const { data: postsChunk, isFetching } = useQuery({
    queryKey: ["posts", user?.user.id, query, loggedUser ? "true" : "false"],
    queryFn: async () =>
      await getPosts(
        loggedUser ? user?.user.id : undefined,
        query,
        user?.token
      ),
  });

  useEffect(() => {
    if (postsChunk) {
      setPosts([...posts, ...postsChunk]);
    }
  }, [postsChunk]);
  const handleCreatePost = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await createPost(data, user?.token);
    navigation(0);
  };
  if (isFetching && posts.length === 0) return <Spinner isFullPage={true} />;
  return (
    <>
      <OneInputForm
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target;
          setQuery({ ...query, searchTerm: form.searchTerm.value });
          setPosts([]);
        }}
        submitText={"Search"}
        inputProps={{ name: "searchTerm", placeholder: "Search" }}
      />
      {loggedUser ? (
        <div className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          <p>
            Hey {user.user.username} <br /> Nice to know you since{" "}
            {user.user.createdAt.split("T")[0]}
            <br />
            Here are your posts:
          </p>
        </div>
      ) : (
        <></>
      )}
      <PostsContainer
        posts={posts}
        showCreatedBy={!loggedUser}
        editable={loggedUser}
      />
      <div className="flex justify-center pb-3 relative">
        <div className="flex flex-row">
          {isFetching ? (
            <Spinner className={"relative h-10 w-10 "} />
          ) : (
            <button
              className="text-gray-600 mx-auto text-xl font-bold p-2 bg-gray-200 rounded-lg hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              onClick={(e) => {
                e.preventDefault();
                const { offset } = query;
                setQuery({ ...query, offset: offset + 10 });
              }}
            >
              Get more
            </button>
          )}
        </div>
      </div>
      {
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6    flex flex-col  flex-shrink w-full relative">
          <h1 className="text-gray-700 border-b-2 pb-2 dark:border-b-gray-700 text-xl dark:text-gray-300 ">
            Add post
          </h1>
          <div className="mt-2">
            <PostForm handleSubmit={handleCreatePost} />
          </div>
        </div>
      }
    </>
  );
};

export default PostsPage;
