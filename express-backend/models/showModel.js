const db = require("./dbConnection");

async function getAllShows(userId) {
    const result = await db.query(
        "SELECT * FROM shows WHERE user_id = $1 ORDER BY id DESC",
        [userId]
    );
    return result.rows;
}

async function addShow(title, type, rating, review, userId, poster, overview) {
    const result = await db.query(
        `INSERT INTO shows (title, type, rating, review, user_id, poster_path, overview)
     VALUES ($1,$2,$3,$4,$5,$6,$7)
     RETURNING *`,
        [title, type, rating, review, userId, poster, overview]
    );
    return result.rows[0];
}

async function deleteShow(id, userId) {
    await db.query(
        "DELETE FROM shows WHERE id = $1 AND user_id = $2",
        [id, userId]
    );
}

module.exports = {
    getAllShows,
    addShow,
    deleteShow
};