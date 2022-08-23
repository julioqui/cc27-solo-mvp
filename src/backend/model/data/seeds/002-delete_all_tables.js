const TABLE_OWNERS = "owners";
const TABLE_SHOPS = "shops";
const TABLE_SPORTS = "sports";
const TABLE_TEAMS = "teams";
const TABLE_TOURNAMENTS = "tournaments";
const TABLE_MATCHES = "matches";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex(TABLE_MATCHES).del();
  await knex(TABLE_TOURNAMENTS).del();
  await knex(TABLE_TEAMS).del();
  await knex(TABLE_SPORTS).del();
  await knex(TABLE_SHOPS).del();
  await knex(TABLE_OWNERS).del();
};
