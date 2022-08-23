require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "sportify",
      user: "postgres",
      password: null,
    },
    migrations: {
      directory: "./src/backend/model/data/migrations",
    },
    seeds: {
      directory: "./src/backend/model/data/seeds",
    },
  },
};
