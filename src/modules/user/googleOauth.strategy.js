const path = require("path");
const passport = require("passport");
const { Strategy } = require("passport-google-oauth2");
const User = require(path.join(process.cwd(), "src/modules/user/user.model"));

module.exports = () => {
  passport.use(
    new Strategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_OAUTH_CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {
        if (profile) {
          const isExist = profile?.email && await User.findOne({
            email: profile?.email,
          });

          if (!isExist) {
            const user = new User({
              fb_id: "",
              email: profile?.email,
              user_name: profile?.displayName,
            });

            await user.save();

            return done(null, user);
          }

          return done(null, isExist);
        }

        return done(null, false);
      },
    ),
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
