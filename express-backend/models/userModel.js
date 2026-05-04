const db = require("./dbConnection");

async function createNewUser({ email, passwordHash, displayName }) {
    const queryText = `
    INSERT INTO users (email, passwordHash, displayName)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

    const result = await db.query(queryText, [
        email,
        passwordhash,
        displayName
    ]);

    return result.rows[0];
}

async function getUserById(id) {
    const queryText = `
    SELECT * FROM users WHERE id = $1
  `;

    const result = await db.query(queryText, [id]);
    return result.rows[0];
}

async function getUserByEmail(email) {
    const queryText = `
    SELECT * FROM users WHERE email = $1
  `;

    const result = await db.query(queryText, [email]);
    return result.rows[0];
}

module.exports = {
    createNewUser,
    getUserById,
    getUserByEmail
};