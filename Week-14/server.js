const path = require("path");

const express = require("express");
require("colors");

const { port } = require("./config");

// Custom module
const errorHandler = require("./middlewares/error");

// Initialize express
const app = express();

// Require db
const connectDB = require("./config/db");

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line global-require
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Error handler middleware
app.use(errorHandler);

// Start Server
(async () => {
  try {
    // Connect Database
    await connectDB();

    const PORT = port || 8080;
    const server = app.listen(PORT, () => {
      console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
    });

    // Handle unhandeled promise error
    process.on("unhandledRejection", (err) => {
      console.error(`Error:  ${err.message}`.inverse.red);
      // exit process
      server.close(() => process.exit(1));
    });
  } catch (error) {
    console.log(`${error.message}`.red.underline.bold);
    process.exit(1);
  }
})();
