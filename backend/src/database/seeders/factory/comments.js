const { faker } = require("@faker-js/faker");

const createComments = (count, users, posts) => {
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push({
      content: faker.lorem.lines(3),
      createdAt: new Date(),
      updatedAt: new Date(),
      authorId: users[Math.floor(Math.random() * users.length)].id,
      postId: posts[Math.floor(Math.random() * posts.length)].id,
    });
  }
  return comments;
};
module.exports = { createComments };
