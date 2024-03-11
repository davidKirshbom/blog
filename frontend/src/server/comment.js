import axios from "axios";
import serverConfig from "./config";
const createComment = async (comment, postId, token) => {
  const response = await axios.post(
    serverConfig.baseUrl + "/comment/create",
    comment,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        postId,
      },
    }
  );
  return response.data;
};
const deleteComment = async (commentId, token) => {
  const response = await axios.delete(
    serverConfig.baseUrl + `/comment/delete/${commentId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
const editComment = async (commentId, content, token) => {
  const response = await axios.put(
    serverConfig.baseUrl + `/comment/edit/${commentId}`,
    content,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export { createComment, deleteComment, editComment };
