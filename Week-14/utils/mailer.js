const nodemailer = require("nodemailer");

const { nodemailerService, nodemailerAuthEmail, nodemailerAuthPassword } = require("../config");

const sendEmail = async ({ to, subject, bodyData, cc, bcc }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: nodemailerService,
      auth: {
        user: nodemailerAuthEmail,
        pass: nodemailerAuthPassword,
      },
    });

    // send mail with options
    const mail = {
      from: nodemailerAuthEmail,
      cc,
      to,
      bcc,
      subject,
      html: bodyData,
    };

    await transporter.verify();
    await transporter.sendMail(mail);
  } catch (error) {
    console.log(`Mail Sending Error: ${error.message}`.red);
  }
};

module.exports = sendEmail;
