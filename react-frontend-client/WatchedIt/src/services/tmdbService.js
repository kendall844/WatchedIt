const BASE_URL = "http://localhost:3000/api/tmdb";

async function searchShows(query, type = "multi") {
    const res = await fetch(
        `${BASE_URL}/search?query=${query}&type=${type}`
    );

    return res.json();
}

async function getPopular(type = "movie") {
    const res = await fetch(`${BASE_URL}/popular/${type}`);
    return res.json();
}

export {
    searchShows,
    getPopular
};