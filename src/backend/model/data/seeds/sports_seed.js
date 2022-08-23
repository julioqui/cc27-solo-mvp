const TABLE_SPORTS = "sports";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex(TABLE_SPORTS).insert([
    { id: 1, name: "Soccer" },
    { id: 2, name: "Basketball" },
    { id: 3, name: "Baseball" },
  ]);
};
