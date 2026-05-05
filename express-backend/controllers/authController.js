const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const signup = async (req, res) => {
    const { email, password, displayname } = req.body;

    const existing = await userModel.getUserByEmail(email);
    if (existing) return res.status(400).json({ message: "Email already exists" });

    const passwordhash = await bcrypt.hash(password, 10);

    const user = await userModel.createNewUser({
        email,
        passwordhash,
        displayname: displayname || null
    });

    req.login(user, (err) => {
        if (err) return res.status(500).json({ message: "Login error" });

        req.session.save(() => {
            res.json(user);
        });
    });
};

const login = (req, res) => {
    res.json(req.user);
};

const logout = (req, res) => {
    req.logout(() => {
        req.session.destroy(() => {
            res.json({ message: "Logged out" });
        });
    });
};

const account = (req, res) => {
    if (!req.isAuthenticated?.()) {
        return res.status(401).json({ message: "Not logged in" });
    }
    res.json(req.user);
};

module.exports = {
    signup,
    login,
    logout,
    account
};