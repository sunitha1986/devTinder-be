const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user", userAuth);

app.post("/user/login", (res, req) => {
  res.send("User logged in successfully.");
});

app.get("/user/data", (res, req) => {
  res.send("User data sent.");
});

app.get("/admin/getAllData", userAuth, (req, res) => {
  res.send("All Data sent.");
});

app.get("/admin/deleteUser", userAuth, (req, res) => {
  res.send("Delete a user.");
});
