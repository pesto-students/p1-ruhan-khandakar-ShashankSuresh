module.exports = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,

  url: process.env.MONGO_URL,
  dbName: process.env.DB_NAME,

  jwtSecret: process.env.JWT_SECRET,
  jwtExpire: process.env.JWT_EXPIRE,

  nodemailerService: process.env.NODEMAILER_SERVICE,
  nodemailerAuthEmail: process.env.NODEMAILER_EMAIL_ID,
  nodemailerAuthPassword: process.env.NODEMAILER_EMAIL_PASSWORD,
  bccMailList: process.env.BCC_MAIL_LIST || [],

  cloudinaryName: process.env.CLOUDINARY_NAME,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
  cloudinaryApiScret: process.env.CLOUDINARY_API_SECRET,
};
