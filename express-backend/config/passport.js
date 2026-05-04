const passport = require("passport");
const userModel = require("../models/userModel");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userModel.getUserById(id);
  done(null, user);
});