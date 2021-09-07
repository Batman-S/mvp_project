exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users_visited_restaurants")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users_visited_restaurants").insert([
        {
          user_id: 1,
          restaurant_id: 1,
        },
        { user_id: 1, restaurant_id: 2 },
        { user_id: 1, restaurant_id: 4 },
        { user_id: 1, restaurant_id: 6 },
      ]);
    });
};
