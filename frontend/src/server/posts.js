import axios from "axios";
import serverConfig from "./config";
const getPosts = async (userId, query, token) => {
  if (!token) return null;
  const response = await axios.get(
    serverConfig.baseUrl +
      `/post?limit=${query.limit}&title=${query.searchTerm}&content=${
        query.searchTerm
      }&offset=${query.offset}${userId ? "&userId=" + userId : ""}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const updatePost = async (post, token) => {
  const response = await axios.put(
    serverConfig.baseUrl + `/post/edit/${post.id}`,
    post,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const createPost = async (post, token) => {
  const response = await axios.post(
    serverConfig.baseUrl + "/post/create",
    post,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
const getPost = async (id, token) => {
  const response = await axios.get(serverConfig.baseUrl + `/post/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export { getPosts, updatePost, createPost, getPost };
