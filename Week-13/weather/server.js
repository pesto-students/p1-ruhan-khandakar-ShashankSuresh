const path = require("path");
const express = require("express");
require("colors");

const { port } = require("./config");

// Custom Module
const errorHandler = require("./middlewares/error");

// Initialize express
const app = express();

// Routes
const weatherRouter = require("./routes/weather");

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line global-require
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

// Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Home route (API Details)
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

// Mount routes
app.use("/weather", weatherRouter);

// Error handler middleware
app.use(errorHandler);

// Start Server
const PORT = port || 8080;
const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`.yellow.bold)
);

// Handle un-handled promise error
process.on("unhandledRejection", (err) => {
  console.error(`Error:  ${err.message}`.inverse.red);
  // exit process
  server.close(() => process.exit(1));
});
