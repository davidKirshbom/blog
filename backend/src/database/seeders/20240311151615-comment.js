"use strict";

const { createComments } = require("./factory/comments");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const posts = await queryInterface.sequelize.query("SELECT id FROM posts");
    const users = await queryInterface.sequelize.query("SELECT id FROM users");
    await queryInterface.bulkInsert(
      "comments",
      await createComments(100, users[0], posts[0])
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("comments", null, {});
  },
};
