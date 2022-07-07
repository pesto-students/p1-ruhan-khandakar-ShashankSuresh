module.exports = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  url: process.env.MONGO_URL,
  dbName: process.env.DB_NAME,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpire: process.env.JWT_EXPIRE,
};
