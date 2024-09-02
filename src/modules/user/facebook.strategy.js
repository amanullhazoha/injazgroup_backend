const path = require("path");
const passport = require("passport");
const { Strategy } = require("passport-facebook");
const User = require(path.join(process.cwd(), "src/modules/user/user.model"));

module.exports = () => {
  passport.use(
    new Strategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: process.env.FACEBOOK_APP_CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {
        if (profile) {
          const isExist = await User.findOne({
            fb_id: profile?.id,
          });

          if (!isExist) {
            const user = new User({
              fb_id: profile?.id,
              user_name: profile?.displayName,
              email: profile?.email ? profile?.email : "",
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
};
