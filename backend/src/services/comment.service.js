const db = require("../database/models");

const createPostComment = async (postId, comment) => {
  const post = await db.Post.findByPk(postId);
  if (!post) {
    throw new Error("Post not found");
  }
  return await post.createComment(comment);
};
const editUserComment = async (user, commentId, comment) => {
  const dbComment = (
    await user.getComments({ where: { id: commentId }, limit: 1 })
  )[0];
  if (!dbComment) {
    throw new Error("Comment not found");
  }

  return await dbComment.update(comment);
};
const deleteUserComment = async (user, commentId) => {
  const dbComment = (
    await user.getComments({ where: { id: commentId }, limit: 1 })
  )[0];
  if (!dbComment) {
    throw new Error("Comment not found");
  }

  return await dbComment.destroy();
};
module.exports = {
  createPostComment,
  editUserComment,
  deleteUserComment,
};
