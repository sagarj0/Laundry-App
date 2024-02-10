const express = require("express");
const connectToDatabase = require("./mongoDB/config");

connectToDatabase();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from server!,We will Laundry Service soon!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
