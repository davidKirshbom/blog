const {
  createUserPost,
  editUserPost,
  getPosts,
} = require("../services/post.service");

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const author = req.user;
  const post = await createUserPost(author, { title, content });
  res.send(post);
};
const editPost = async (req, res) => {
  const { title, content } = req.body;
  const postId = req.params.id;
  const author = req.user;

  const post = await editUserPost(author, postId, { title, content });

  res.send(post);
};
const findPosts = async (req, res) => {
  const { title, content } = req.query;
  const posts = await getPosts(title, content);
  res.send(posts);
};
module.exports = {
  createPost,
  editPost,
  findPosts,
};
