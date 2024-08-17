// console.log("Chai aur Code");

const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT; //3000

const githubData = {
  login: "KanishkVijaywargiya",
  id: 43451046,
  node_id: "MDQ6VXNlcjQzNDUxMDQ2",
  avatar_url: "https://avatars.githubusercontent.com/u/43451046?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/KanishkVijaywargiya",
  html_url: "https://github.com/KanishkVijaywargiya",
  followers_url: "https://api.github.com/users/KanishkVijaywargiya/followers",
  following_url:
    "https://api.github.com/users/KanishkVijaywargiya/following{/other_user}",
  gists_url: "https://api.github.com/users/KanishkVijaywargiya/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/KanishkVijaywargiya/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/KanishkVijaywargiya/subscriptions",
  organizations_url: "https://api.github.com/users/KanishkVijaywargiya/orgs",
  repos_url: "https://api.github.com/users/KanishkVijaywargiya/repos",
  events_url:
    "https://api.github.com/users/KanishkVijaywargiya/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/KanishkVijaywargiya/received_events",
  type: "User",
  site_admin: false,
  name: "Kanishk Vijaywargiya",
  company: null,
  blog: "www.androwebios.epizy.com",
  location: "Bangalore, India",
  email: null,
  hireable: true,
  bio: "#Swift #SwiftUI #JavaScript #React Js #ReactNative #node Js #MongoDB #Express Js #FullStack",
  twitter_username: null,
  public_repos: 146,
  public_gists: 0,
  followers: 14,
  following: 31,
  created_at: "2018-09-20T17:59:03Z",
  updated_at: "2023-10-23T12:49:08Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("kanishkvijay");
});

app.get("/login", (req, res) => {
  res.send("<h1>Welcome to Login Page</h1>");
});

app.get("/youtube", (req, res) => {
  res.redirect("https://www.youtube.com");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
