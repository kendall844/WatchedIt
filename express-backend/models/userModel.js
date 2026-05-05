const db = require("./dbConnection");

async function createNewUser({ email, passwordhash, displayname }) {
    const result = await db.query(
        "INSERT INTO users (email, passwordhash, displayname) VALUES ($1,$2,$3) RETURNING *",
        [email, passwordhash, displayname]
    );
    return result.rows[0];
}

async function getUserById(id) {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0] || null;
}

async function getUserByEmail(email) {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0];
}

module.exports = {
    createNewUser,
    getUserById,
    getUserByEmail
};