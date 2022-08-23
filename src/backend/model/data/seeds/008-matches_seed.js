const TABLE_MATCHES = "matches";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex(TABLE_MATCHES).insert([
    {
      id: 1,
      shop_id: 1,
      sport_id: 1,
      tournament_id: 1,
      date: "2022-08-24 15:00",
      home_team_id: 1,
      away_team_id: 2,
    },
    {
      id: 2,
      shop_id: 2,
      sport_id: 2,
      tournament_id: 2,
      date: "2022-08-24 15:00",
      home_team_id: 3,
      away_team_id: 4,
    },
    {
      id: 3,
      shop_id: 3,
      sport_id: 3,
      tournament_id: 3,
      date: "2022-08-24 17:00",
      home_team_id: 5,
      away_team_id: 6,
    },
  ]);
};
