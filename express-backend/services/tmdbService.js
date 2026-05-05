const axios = require("axios");

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

async function searchOne(title, type = "movie") {
    const res = await axios.get(`${BASE_URL}/search/${type}`, {
        params: {
            api_key: API_KEY,
            query: title
        }
    });

    return res.data.results?.[0];
}

async function getPopular(type = "movie") {
    const res = await axios.get(`${BASE_URL}/${type}/popular`, {
        params: {
            api_key: API_KEY
        }
    });

    return res.data.results;
}

module.exports = {
    searchOne,
    getPopular
};