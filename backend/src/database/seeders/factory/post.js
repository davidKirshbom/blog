const { faker } = require("@faker-js/faker");

const createPosts = (count, users) => {
  const posts = [];

  for (let i = 0; i < count; i++) {
    posts.push({
      title: faker.lorem.words(),
      content: faker.lorem.paragraphs(2),
      createdAt: new Date(),
      updatedAt: new Date(),
      authorId: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  return posts;
};

module.exports = { createPosts };
