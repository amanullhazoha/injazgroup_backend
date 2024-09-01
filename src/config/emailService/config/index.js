const nodemailer = require("nodemailer");

module.exports = (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SENDER_HOST,
    port: process.env.EMAIL_SENDER_PORT,
    secure: true,
    tls: { rejectUnauthorized: false },
    auth: {
      user: process.env.EMAIL_SENDER_ACCOUNT,
      pass: process.env.EMAIL_SENDER_PASSWORD,
    },
  });

  const mailOptions = {
    ...options,
    from: process.env.EMAIL_SENDER_ACCOUNT,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
