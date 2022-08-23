const TABLE_OWNERS = "owners";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex(TABLE_OWNERS).insert([
    { id: 1, name: "Julio", password: "Julio1234" },
    { id: 2, name: "Felipe", password: "Felipe1234" },
    { id: 3, name: "Zach", password: "Zach1234" },
  ]);
};
