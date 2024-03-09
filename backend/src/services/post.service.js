const db = require("../database/models");

const createUserPost = async (user, post) => {
  if (!user) {
    throw new Error("User not found");
  }
  return await user.createPost(post);
};
const editUserPost = async (user, postId, post) => {
  const userPost = (
    await user.getPosts({ where: { id: postId }, limit: 1 })
  )[0];
  if (!userPost) {
    throw new Error("Post not found");
  }
  return await userPost.update(post);
};
const getPosts = async (title = "", content = "") => {
  const posts = await db.Post.findAll({
    where: {
      title: {
        [db.Sequelize.Op.like]: `%${title}%`,
      },
      content: {
        [db.Sequelize.Op.like]: `%${content}%`,
      },
    },
  });
  return posts;
};

module.exports = {
  createUserPost,
  editUserPost,
  getPosts,
};
