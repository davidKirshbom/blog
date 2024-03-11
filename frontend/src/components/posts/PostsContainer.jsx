import { getPosts } from "../../server/posts";
import Post from "./Post";

const PostsContainer = ({ posts, showCreatedBy, editable }) => {
  console.log({ posts });
  return (
    <div className="w-full ">
      {posts?.map((post) => (
        <div className="my-3  w-full" key={["container", post.id].join("_")}>
          <Post
            key={post.id}
            post={post}
            showCreatedBy={showCreatedBy}
            editable={editable}
            showComments={true}
          />
        </div>
      ))}
    </div>
  );
};

export default PostsContainer;
