const model = require("../models/showModel");
const tmdb = require("../services/tmdbService");

const getShows = async (req, res) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    const shows = await model.getAllShows(req.user.id);
    res.json(shows);
};

const createShow = async (req, res) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    const { title, type, review } = req.body;

    const tmdbData = await tmdb.searchOne(title, type) || {};

    const show = await model.addShow(
        title,
        type,
        tmdbData.vote_average || null,
        review,
        req.user.id,
        tmdbData.poster_path || null,
        tmdbData.overview || null
    );

    res.json(show);
};

const deleteShow = async (req, res) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    await model.deleteShow(req.params.id, req.user.id);
    res.json({ success: true });
};

module.exports = {
    getShows,
    createShow,
    deleteShow
};