
const pool = require('./dbConnection');

async function getAllShows() {
    const queryText = "SELECT * FROM shows";
    const result = await pool.query(queryText);
    return result.rows;
    
}

async function getOneShowById(id) {
    const queryText = "SELECT * FROM shows WHERE id = $1";
    const values = [id];
    const result = await pool.query(queryText, values);
    return result.rows[0];
}

module.exports = {
    getAllShows,
    getOneShowById
};