import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPost } from "../../server/posts";
import Post from "../posts/Post";
import useAuth from "../../hooks/useAuth";
import Spinner from "../common/Spinner";

const PostPage = () => {
  const { postId } = useParams();
  const { user } = useAuth();
  const { data: post, isFetching } = useQuery({
    queryKey: ["post", postId, user?.token],
    queryFn: async () => await getPost(postId, user?.token),
  });
  if (isFetching) return <Spinner isFullPage={true} />;
  return (
    <div>
      <Post post={post} showComments={true} />
    </div>
  );
};

export default PostPage;
