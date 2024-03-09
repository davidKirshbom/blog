const config = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_NAME || "database_development",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  dialect: process.env.DB_DIALECT || "mysql",
};

module.exports = {
  development: config,
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
