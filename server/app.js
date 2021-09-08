const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");

const app = express();

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

app.use(express.json());

app.get("/api/users", async (req, res) => {
  try {
    const users = await db.select().table("users");
    res.json(users);
  } catch (err) {
    console.log("Error loading users", err);
    res.sendStatus(500);
  }
});

app.get("/api/restaurants", async (req, res) => {
  try {
    const restaurants = await db.select().table("restaurants");
    res.json(restaurants);
  } catch (err) {
    console.log("Error loading users", err);
    res.sendStatus(500);
  }
});

app.get("/api/users_visited_restaurants", async (req, res) => {
  try {
    const users_visited_restaurants = await db("restaurants")
      .join(
        "users_visited_restaurants",
        "restaurants.id",
        "=",
        "users_visited_restaurants.restaurant_id"
      )
      .select("*");

    res.json(users_visited_restaurants);
  } catch (err) {
    console.log("Error loading users", err);
    res.sendStatus(500);
  }
});

app.post("/api/users_visited_restaurants", async (req, res) => {
  try {
    const { user_id, restaurant_id } = req.body;
    await db("users_visited_restaurants").insert({
      user_id: user_id,
      restaurant_id: restaurant_id,
    });
    res.sendStatus(200);
  } catch (err) {
    console.log("Error loading users", err);
    res.sendStatus(500);
  }
});

app.get("/api/users_notes_restaurants", async (req, res) => {
  try {
    const users_notes_restaurants = await db("restaurants")
      .join(
        "users_notes_restaurants",
        "restaurants.id",
        "=",
        "users_notes_restaurants.restaurant_id"
      )
      .select("*");

    res.json(users_notes_restaurants);
  } catch (err) {
    console.log("Error loading notes", err);
    res.sendStatus(500);
  }
});

app.post("/api/users_notes_restaurants", async (req, res) => {
  try {
    const { user_id, restaurant_id, notedetails } = req.body;
    await db("users_notes_restaurants").insert({
      user_id: user_id,
      restaurant_id: restaurant_id,
      notedetails: notedetails
    });
    res.sendStatus(200);
  } catch (err) {
    console.log("Error creating note", err);
    res.sendStatus(500);
  }
});
// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
