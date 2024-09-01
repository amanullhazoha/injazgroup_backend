const nodemailer = require("../../config/emailService/config");
const { generateAccessToken } = require("../user/user.service");
const { contactMail } = require("../../config/emailService/template")

const userGoogleLoginCallBack = async (req, res, next) => {
  try {
    const user = req?.user;

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    const accessToken = generateAccessToken(payload);

    nodemailer(contactMail(user.email, user.name, "Login successfully"));

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      signed: true,
      secure: true,
      sameSite: "None",
      domain: process.env.FRONTEND_DOMAIN,
    });

    res.redirect(process.env.GOOGLE_OAUTH_SUCCESS_REDIRECT);
  } catch (error) {
    next(error);
  }
};

const userFacebookLoginCallBack = async (req, res, next) => {
  try {
    const user = req?.user;

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    const accessToken = generateAccessToken(payload);


    nodemailer(contactMail(user.email, user.name, "Login successfully"));

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      signed: true,
      secure: true,
      sameSite: "None",
      domain: process.env.FRONTEND_DOMAIN,
    });

    res.redirect(process.env.GOOGLE_OAUTH_SUCCESS_REDIRECT);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userGoogleLoginCallBack,
  userFacebookLoginCallBack,
};
