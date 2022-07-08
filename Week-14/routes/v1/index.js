const express = require("express");

const authRouter = require("./auth");
const wealthRouter = require("./wealth");
const fundRouter = require("./fund");
const assetRouter = require("./asset");

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/wealths", wealthRouter);
rootRouter.use("/funds", fundRouter);
rootRouter.use("/assets", assetRouter);

module.exports = rootRouter;
