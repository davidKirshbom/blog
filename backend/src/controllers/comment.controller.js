const {
  createPostComment,
  editUserComment,
  deleteUserComment,
} = require("../services/comment.service");
const ApiError = require("../utils/ApiError");
const httpsStatuses = require("../utils/httpStatusCodes");
const createComment = async (req, res) => {
  const { content } = req.body;
  const postId = req.query.postId;
  const author = req.user;
  if (!content || !content === "") {
    throw new ApiError(httpsStatuses.BAD_REQUEST, "Content is required");
  }
  const comment = await createPostComment(postId, {
    content,
    authorId: author.id,
  });
  res.send(comment);
};

const editComment = async (req, res) => {
  const { content } = req.body;
  const commentId = req.params.id;
  const author = req.user;
  const comment = await editUserComment(author, commentId, { content });
  res.send(comment);
};
const deleteComment = async (req, res) => {
  const commentId = req.params.id;
  const author = req.user;
  const comment = await deleteUserComment(author, commentId);
  res.send(comment);
};
module.exports = {
  createComment,
  editComment,
  deleteComment,
};
