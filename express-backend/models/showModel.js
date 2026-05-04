const model = require("../models/showModel");

async function getShows(req, res) {
    const shows = await model.getAllShows(req.user.id);
    res.json(shows);
}

async function getOneShow(req, res) {
    const show = await model.getOneShowById(req.params.id, req.user.id);
    res.json(show);
}

async function createShow(req, res) {
    const { title, type, rating, review } = req.body;

    const newShow = await model.addShow(
        title,
        type,
        rating,
        review,
        req.user.id
    );

    res.json(newShow);
}

async function getShowsByType(req, res) {
    const shows = await model.getShowsByType(req.params.type, req.user.id);
    res.json(shows);
}

module.exports = {
    getShows,
    getOneShow,
    createShow,
    getShowsByType
};