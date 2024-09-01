const passport = require("passport");
const { userGoogleLoginCallBack, userFacebookLoginCallBack } = require("./user.controller");

module.exports = (app) => {
  app.get(
    "/api/v1/public/google-login",
    passport.authenticate("google", {
      access_type: "offline",
      scope: ["profile", "email"],
    }),
    (req, res) => {
      res.status(200).send("user google login successfully");
    },
  );

  app.get(
    "/api/v1/public/google-callback",
    passport.authenticate("google", {
      failureRedirect: process.env.GOOGLE_OAUTH_FAILURE_REDIRECT,
    }),
    userGoogleLoginCallBack,
  );

  app.get(
    "/api/v1/public/facebook-login",
    passport.authenticate("facebook", {
      access_type: "offline",
      scope: ["profile", "email"],
    }),
    (req, res) => {
      res.status(200).send("User facebook login successfully");
    },
  );

  app.get(
    "/api/v1/public/facebook-callback",
    passport.authenticate("facebook", {
      failureRedirect: process.env.GOOGLE_OAUTH_FAILURE_REDIRECT,
    }),
    userFacebookLoginCallBack,
  );
};
