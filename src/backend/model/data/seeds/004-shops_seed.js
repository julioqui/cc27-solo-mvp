const TABLE_SHOPS = "shops";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex(TABLE_SHOPS).insert([
    {
      id: 1,
      owner_id: 1,
      name: "Julio's Bar",
      address: "Tokyo, Shinjuku, Somewhere",
      city: "Shinjuku",
    },
    {
      id: 2,
      owner_id: 2,
      name: "Felipe' Bar",
      address: "Tokyo, Shibuya, Somewhere",
      city: "Shibuya",
    },
    {
      id: 3,
      owner_id: 3,
      name: "Zach's Bar",
      address: "Tokyo, Roppongi, Somewhere",
      city: "Roppongi",
    },
  ]);
};
