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
const getPosts = async (title = "", content = "", limit, offset, userId) => {
  const posts = await db.Post.findAll({
    where: {
      [db.Sequelize.Op.and]: [
        {
          [db.Sequelize.Op.or]: [
            {
              title: {
                [db.Sequelize.Op.like]: `%${title}%`,
              },
            },
            {
              content: {
                [db.Sequelize.Op.like]: `%${content}%`,
              },
            },
          ],
        },
        userId ? { authorId: userId } : {},
      ],
    },
    order: [["createdAt", "DESC"]],
    limit,
    offset,
    include: [
      {
        model: db.User,
        as: "author",
        attributes: ["username", "id"],
      },
      {
        model: db.Comment,
        as: "comments",

        include: [
          {
            model: db.User,
            as: "author",
            attributes: ["username", "id"],
          },
        ],
      },
    ],
  });
  return posts;
};
const getPostById = async (id) => {
  const post = await db.Post.findByPk(id, {
    include: [
      {
        model: db.User,
        as: "author",
        attributes: ["username", "id"],
      },
      {
        model: db.Comment,
        as: "comments",

        include: [
          {
            model: db.User,
            as: "author",
            attributes: ["username", "id"],
          },
        ],
      },
    ],
  });
  return post;
};

module.exports = {
  createUserPost,
  editUserPost,
  getPosts,
  getPostById,
};
