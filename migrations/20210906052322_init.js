exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable("users", (table) => {
      table.increments("id", { primaryKey: true });
      table.string("username").notNullable();
    }),

    knex.schema.createTable("restaurants", (table) => {
      table.increments("id", { primaryKey: true });
      table.string("name").notNullable();
      table.string("location").notNullable();
      table.string("cuisine").notNullable();
      table.integer("starvalue").notNullable();
    }),

    knex.schema.createTable("users_visited_restaurants", (table) => {
      table.increments("id", { primaryKey: true });
      table.date("datevisited").notNullable().defaultTo(knex.fn.now());

      table.integer("user_id", { deferrable: "deferred" }).unsigned();
      table.integer("restaurant_id", { deferrable: "deferred" }).unsigned();

      table.foreign("user_id").references("users.id").onDelete("CASCADE");
      table
        .foreign("restaurant_id")
        .references("restaurants.id")
        .onDelete("CASCADE");
    }),
    
    knex.schema.createTable("users_notes_restaurants", (table) => {
      table.increments("id", { primaryKey: true });
      table.date("datecreated").notNullable().defaultTo(knex.fn.now());
      table.string("notedetails").notNullable();
      table.integer("user_id", { deferrable: "deferred" }).unsigned();
      table.integer("restaurant_id", { deferrable: "deferred" }).unsigned();

      table.foreign("user_id").references("users.id").onDelete("CASCADE");
      table
        .foreign("restaurant_id")
        .references("restaurants.id")
        .onDelete("CASCADE");
    }),
  ]);
};

exports.down = function (knex) {};
