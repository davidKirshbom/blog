const { faker } = require("@faker-js/faker");
const { hashPassword } = require("../../../utils/auth");

const createUsers = async (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      username: faker.internet.userName(),
      password: await hashPassword("password"),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return users;
};

module.exports = createUsers;
