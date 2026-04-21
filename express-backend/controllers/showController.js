const model = require("../models/showModel");

const getShows = async (req, res) => {
    try {
        const shows = await model.getAllShows();
        res.json(shows);
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

const getOneShow = async (req, res) => {
    try{
        const show = await model.getOneShowById();
        res.json(show);
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

const createShow = async (req, res) => {
    try{
        const {title, type, rating, review} = req.body;
        const newShow = await model.addShow(title, type, rating, review);
        res.json(newShow);
    } catch (err){
        res.status(500).json({ error: err.message});
    }
};

const getShowsByType = async (req, res0) => {
    try{
        const shows = await model.getShowsByType(req.params.type);
        res.json(shows);
    }catch (err){
        res.status(500).json({error: err.message});
    }
};


module.exports = {
    getShows,
    getOneShow,
    createShow,
    getShowsByType
};