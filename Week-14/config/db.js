const mongoose = require("mongoose");

const { url, dbName } = require("./index");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url, {
      dbName,
    });
    console.log(`Database connection: ${conn.connection.host}`.cyan.underline.bold);
  } catch (error) {
    throw Error(`Database connection Error: ${error.message}`);
  }
};
module.exports = connectDB;
