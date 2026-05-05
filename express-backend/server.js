const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

require("./config/passport")(passport);

const authRoutes = require("./routes/authRoutes");
const showRoutes = require("./routes/showRoutes");

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes);
app.use("/api/shows", showRoutes);

app.listen(3000);