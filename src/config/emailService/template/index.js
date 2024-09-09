const fs = require("fs")
const path = require("path");


const contactMail = (email, user_name, message) => {
    if (!fs.existsSync(path.join(__dirname, '../../assets/files/services_rival.pdf'))) {
      console.error('PDF file not found at:');
      return;
    }

    const bufferFile = fs.readFileSync(path.join(__dirname, '../../assets/files/services_rival.pdf'));

    return {
      from: process.env.EMAIL_SENDER_ACCOUNT,
      text: message,
      to: email,
      subject: `${user_name} successfully join us`,
      attachments: [
        {
          content: bufferFile,
          contentType: 'application/pdf',
          filename: 'services-rival.pdf',
        },
      ],
    };
};

module.exports = {
  contactMail
}
  