console.log("Starting new project.");

const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Sunitha", lastName: "G" });
});

app.post("/user", (req, res) => {
  //Save data to DB.
  res.send("Data Successfully saved to DB.");
});

app.delete("/user", (req, res) => {
  res.send("Data deleted sucessfully.");
});

app.patch("/user", (req, res) => {
  res.send("Patch operation is sucessfull.");
});

app.put("/user", (req, res) => {
  res.send("Put operation is sucessfull.");
});
app.use("/", (req, res) => {
  res.send("Hello from dashboard..............");
});

app.listen(7777, () => {
  console.log("server runs on port 7777");
});
