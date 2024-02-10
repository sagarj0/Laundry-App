const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

async function connectToDatabase() {
  try {
    const DB = process.env.DB_STRING.replace(
      "<password>",
      process.env.DB_PASSWORD
    );
    console.log(DB);

    await mongoose.connect(DB, {
      useNewUrlParser: true,
    });

    console.log("DB connection successful");
  } catch (err) {
    console.error(err);
  }
}

connectToDatabase();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from server!,We will Laundry Service soon!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
