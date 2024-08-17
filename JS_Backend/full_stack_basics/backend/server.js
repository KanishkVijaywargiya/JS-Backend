// const express = require("express"); old syntax
import express from "express"; // new modern syntax
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// very bad practice to use frontend build in this way
// app.use(express.static("dist"));

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  // array of jokes
  const jokes = [
    {
      id: 1,
      title: "A Joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another Joke",
      content: "This is another joke",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
