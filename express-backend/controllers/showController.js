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

module.exports = {
    getShows,
    getOneShow
};