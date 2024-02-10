const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(__dirname, "config.env"),
});

const connectToDatabase = async () => {
  try {
    const DB = process.env.DB_STRING.replace(
      "<password>",
      process.env.DB_PASSWORD
    );

    await mongoose.connect(DB, {
      useNewUrlParser: true,
    });

    console.log("DB connection successful");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectToDatabase;
