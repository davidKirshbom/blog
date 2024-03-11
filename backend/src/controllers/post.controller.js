const {
  createUserPost,
  editUserPost,
  getPosts,
  getPostById,
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
  const { title, content, limit, offset, userId } = req.query;
  let limitNumber;
  let offsetNumber;
  try {
    limitNumber = parseInt(limit);
    offsetNumber = parseInt(offset);
  } catch (error) {}
  const posts = await getPosts(
    title,
    content,
    limitNumber,
    offsetNumber,
    userId
  );
  res.send(posts);
};
const getPostByPk = async (req, res) => {
  const { id } = req.params;

  const post = await getPostById(parseInt(id));
  res.send(post);
};
module.exports = {
  createPost,
  editPost,
  findPosts,
  getPostByPk,
};
