const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

const DB = process.env.DB_STRING.replace("<password>", process.env.DB_PASSWORD);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
    });

    console.log("DB connection successful");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectToDatabase;
