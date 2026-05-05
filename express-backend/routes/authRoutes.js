const express = require("express");
const router = express.Router();
const passport = require("passport");
const controller = require("../controllers/authController");

router.post("/signup", controller.signup);

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user) => {
        if (err) return res.status(500).json({ message: "Server error" });
        if (!user) return res.status(401).json({ message: "Invalid credentials" });

        req.logIn(user, (err) => {
            if (err) return res.status(500).json({ message: "Login failed" });

            req.session.save(() => {
                res.json(user);
            });
        });
    })(req, res, next);
});

router.post("/logout", (req, res) => {
    req.logout(() => {
        req.session.destroy(() => {
            res.json({ message: "Logged out" });
        });
    });
});

router.get("/account", (req, res) => {
    if (!req.isAuthenticated?.()) {
        return res.status(401).json({ message: "Not logged in" });
    }
    res.json(req.user);
});

module.exports = router;