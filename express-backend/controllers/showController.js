const model = require("../models/showModel");

exports.createShow = async (req, res) => {
    const userId = req.user.id;
    const newShow = await db.query(
        "INSERT INTO shows (title, type, status, user_id) VALUES (?, ?, ?, ?)",
        [req.body.title, req.body.type, req.body.status, userId]
    );
    res.json(newShow);
};

exports.getShows = async (req, res) => {
    const userId = req.user.id;

    const shows = await db.query(
        "SELECT * FROM shows WHERE user_id = ?",
        [userId]
    );
    res.json(shows);
};

exports.getOneShow = async (req, res) => {
    const userId = req.user.id;

    const show = await db.query(
        "SELECT * FROM shows WHERE id = ? AND user_id = ?",
        [req.params.id, userId]
    );
    res.json(show[0]);
};

exports.getShowsByType = async (req, res) => {
   const userId = req.user.id;

   const shows = await db.query(
    "SELECT * FROM shows WHERE type = ? AND user_id = ?",
    [req.params.type, userId]
   );
   res.json(shows);
};


module.exports = {
    getShows,
    getOneShow,
    createShow,
    getShowsByType
};