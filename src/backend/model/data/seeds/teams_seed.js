const TABLE_TEAMS = "teams";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex(TABLE_TEAMS).insert([
    { id: 1, sport_id: 1, name: "Brazil" },
    { id: 2, sport_id: 1, name: "Japan" },
    { id: 3, sport_id: 2, name: "LA Lakers" },
    { id: 4, sport_id: 2, name: "Chicago Bulls" },
    { id: 5, sport_id: 3, name: "Hanshin Tigers" },
    { id: 6, sport_id: 3, name: "Rakuten Eagles" },
  ]);
};
