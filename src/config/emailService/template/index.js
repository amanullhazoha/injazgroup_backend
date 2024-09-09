const contactMail = (email, user_name, message) => {
    return {
      from: process.env.EMAIL_SENDER_ACCOUNT,
      text: message,
      to: email,
      subject: `${user_name} successfully join us`,
      attachments: [
        {
          filename: 'services-rival.pdf',
          path: path.join(__dirname, 'src/config/assets/files/services_rival.pdf'),
        },
      ],
    };
};

module.exports = {
  contactMail
}
  