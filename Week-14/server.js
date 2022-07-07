const path = require("path");
require("colors");

const express = require("express");

const fileUpload = require("express-fileupload");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const hpp = require("hpp");
const cors = require("cors");
const expressRateLimit = require("express-rate-limit");
const { port } = require("./config");

// Custom module
const errorHandler = require("./middlewares/error");

// Require db file
const connectDB = require("./config/db");

// Initialize express
const app = express();

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

// Security middlewares
app.use(mongoSanitize());
app.use(helmet());
const limiter = expressRateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});
app.use(limiter);
app.use(hpp()); // prevent http param pollution
app.use(cors());

// File uploading
app.use(fileUpload());

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
