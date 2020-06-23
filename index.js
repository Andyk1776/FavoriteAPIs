var express = require("express");
var app = express();
var PORT = 3000;

var favoriteShows = [
  {
    id: 1,
    title: "Bob's Burgers",
    category: "Cartoon",
  },
  {
    id: 2,
    title: "The Walking Dead",
    category: "Drama, horror",
  },
  {
    id: 3,
    title: "Rick And Morty",
    category: "Cartoon",
  },
  {
    id: 4,
    title: "American Dad",
    category: "Cartoon",
  },
  {
    id: 5,
    title: "Family Guy",
    category: "Cartoon",
  },
];

app.get("/", function (req, res) {
  res.send("Welcome to the favorite shows API!");
});

app.get("/api/favoriteShows", function (req, res) {
  return res.json(favoriteShows);
});

app.get("/api/c/:id", function (req, res) {
  var chosen = req.params.id;
  chosen = parseInt(text, id);
  console.log(chosen);

  for (var i = 0; i < favoriteShows.length; i++) {
    if (chosen === favoriteShows[i].id) {
      return res.json(favoriteShows[i]);
    }
  }

  return res.send("No shows found");
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
