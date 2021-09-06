const restaurants = require("../data/restaurants.json")

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {

      const res = [];
      for (const restaurant of restaurants) {
        res.push({
          name: restaurant.name,
          location: restaurant.location,
          cuisine: restaurant.cuisine,
          starvalue: restaurant.starvalue
        })
      }
      // Inserts seed entries
      return knex('restaurants').insert(res);
    });
};
