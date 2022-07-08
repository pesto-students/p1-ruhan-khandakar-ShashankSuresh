const express = require("express");

const authRouter = require("./auth");
const wealthRouter = require("./wealth");

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/wealth", wealthRouter);

module.exports = rootRouter;
