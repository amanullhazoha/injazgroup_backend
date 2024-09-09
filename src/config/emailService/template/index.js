const fs = require("fs")
const path = require("path");

const contactMail = (email, user_name, message) => {
    return {
      from: process.env.EMAIL_SENDER_ACCOUNT,
      text: message,
      to: email,
      subject: `${user_name} successfully join us`,
      attachments: [
        {
          filename: 'services-rival.pdf',
          path: fs.readFileSync(path.join(__dirname, '../../assets/files/services_rival.pdf')),
        },
      ],
    };
};

module.exports = {
  contactMail
}
  