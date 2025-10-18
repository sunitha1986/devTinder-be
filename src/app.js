console.log("Starting new project.");

const express = require("express");
const app = express();

app.use("/hello/2", (req, res) => {
  res.send("sub route......");
});

app.use("/hello", (req, res) => {
  res.send("Hello helo.");
});

app.use("/test", (req, res) => {
  res.send("Hello test.!!!!!!!!!!!!!!");
});

app.use("/", (req, res) => {
  res.send("Hello from dashboard..............");
});

app.listen(7777, () => {
  console.log("server runs on port 7777");
});
