const db = require("./dbConnection");

async function createNewUser({ email, passwordhash, displayname }) {
  const queryText = `
    INSERT INTO users (email, passwordhash, displayname)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  const result = await db.query(queryText, [
    email,
    passwordhash,
    displayname
  ]);

  return result.rows[0];
}

async function getUserById(id) {
  const result = await db.query(
    "SELECT * FROM users WHERE id = $1",
    [id]
  );

  return result.rows[0] || null;
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