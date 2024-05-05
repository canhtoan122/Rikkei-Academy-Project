const database = require("../configs/db.config");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function login(username, password) {
    const query = `SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`;
    let result = await database.execute(query);
    const user = result[0][0];
    if(user){
        const token = jwt.sign({ id: user.id, username: user.username, password:user.password, role: user.role }, process.env.SECRET_KEY_JWT, { expiresIn: "1h" });
        return {
            token,
        };
    }
    return null;
}
async function register(username, email, password, role) {
    const query = `INSERT INTO user (username, email, password, role) VALUES ('${username}', '${email}', '${password}', '${role}');`;
    let result = await database.execute(query);
    if(result){
        return result[0].insertId;
    }
    return false;
}
module.exports = {
    login,
    register
}