const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const userModel = require("../models/userModel");

router.post("/signup", async (req, res) => {
    const { email, password, displayname } = req.body;

    const existing = await userModel.getUserByEmail(email);
    if (existing) {
        return res.status(400).json({ message: "Email already exists" });
    }

    const passwordhash = await bcrypt.hash(password, 10);

    const user = await userModel.createNewUser({
        email,
        passwordhash,
        displayname: displayname || null
    });

    req.login(user, (err) => {
        if (err) return res.status(500).json({ message: "Login error" });

        const { passwordhash, ...safeUser } = user;
        res.json(safeUser);
    });
});

router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const user = await userModel.getUserByEmail(email);

    if (!user) {
        return res.status(400).json({ message: "Email is not registered under an account. Proceed to sign up." });
    }

    console.log("USER FROM DB:", user);

    const match = await bcrypt.compare(password, user.passwordhash);

    if (!match) {
        return res.status(400).json({ message: "Invalid password, try again." });
    }

    req.login(user, (err) => {
        if (err) return res.status(500).json({ message: "Error logging in" });

        const { passwordhash, ...safeUser } = user;
        res.json(safeUser);
    });
});

router.get("/account", (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not logged in" });
    }
    res.json(req.user);
});

router.post("/logout", (req, res) => {
    req.logout(() => {
        req.session.destroy(() => {
            res.json({ message: "Logged out" });
        });
    });
});

module.exports = router;