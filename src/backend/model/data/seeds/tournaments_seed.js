const TABLE_TOURNAMENTS = "tournaments";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex(TABLE_TOURNAMENTS).insert([
    { id: 1, sport_id: 1, name: "Soccer World Cup" },
    { id: 2, sport_id: 2, name: "NBA" },
    { id: 3, sport_id: 3, name: "NPB" },
  ]);
};
