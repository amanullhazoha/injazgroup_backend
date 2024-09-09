const fs = require("fs")
const path = require("path");
const pdfFile = require("../../assets/files/services_rival.pdf")

const contactMail = (email, user_name, message) => {
    return {
      from: process.env.EMAIL_SENDER_ACCOUNT,
      text: message,
      to: email,
      subject: `${user_name} successfully join us`,
      attachments: [
        {
          filename: 'services-rival.pdf',
          contentType: 'application/pdf',
          content: fs.readFileSync(pdfFile),
        },
      ],
    };
};

module.exports = {
  contactMail
}
  