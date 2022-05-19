import Oauth from "passport-google-oauth20";

const GoogleStrategy = Oauth.Strategy;
import passport from "passport";

const GOOGLE_CLIENT_ID =
  "208274643698-7d0ugkimrt9v3llsc3el258a046jcmb2.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
