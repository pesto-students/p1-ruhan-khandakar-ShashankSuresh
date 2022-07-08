const express = require("express");

const authRouter = require("./auth");
const wealthRouter = require("./wealth");
const fundRouter = require("./fund");

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/wealths", wealthRouter);
rootRouter.use("/funds", fundRouter);

module.exports = rootRouter;
