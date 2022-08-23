const TABLE_NAME = "matches";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id").primary();
    table.integer("shop_id").notNullable();
    table.foreign("shop_id").references("shops.id");
    table.integer("sport_id").notNullable();
    table.foreign("sport_id").references("sports.id");
    table.integer("tournament_id").notNullable();
    table.foreign("tournament_id").references("tournaments.id");
    table.datetime("date", { useTz: false });
    table.integer("home_team_id");
    table.foreign("home_team_id").references("teams.id");
    table.integer("away_team_id");
    table.foreign("away_team_id").references("teams.id");
    table.timestamp("created_at", { useTz: false });
    table.timestamp("updated_at", { useTz: false });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
