const model = require("../models/showModel");

async function createShow(req, res) {
    const userId = req.user.id;
    const newShow = await model.createShow(req.body, userId);
    res.json(newShow);
}

async function getShows(req, res) {
    const userId = req.user.id;
    const shows = await model.getShows(userId);
    res.json(shows);
}

async function getOneShow(req, res) {
    const userId = req.user.id;
    const show = await model.getOneShow(req.params.id, userId);
    res.json(show);
}

async function getShowsByType(req, res) {
    const userId = req.user.id;
    const shows = await model.getShowsByType(req.params.type, userId);
    res.json(shows);
}

module.exports = {
    createShow,
    getShows,
    getOneShow,
    getShowsByType
};