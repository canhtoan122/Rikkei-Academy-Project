const database = require("../configs/db.config");
const jwt = require("jsonwebtoken");
const bscript = require("bcrypt");
require("dotenv").config();

async function login(email, password) {
    const query = `SELECT * FROM user WHERE email = '${email}'`;
    let result = await database.execute(query);
    const user = result[0][0];
    if(user){
        let mk = bscript.compare(password, user.password);
        console.log(mk);
        const token = mk.then((result)=>{
            console.log("Kết quả sau khi so sánh mật khẩu", result);
            if(result){
                const token = jwt.sign({ id: user.id, username: user.username, email: user.email, password:user.password, role: user.role }, process.env.SECRET_KEY_JWT, { expiresIn: "1h" });
                return token;
            }else{
                return 'Incorrect password';
            }
        }).catch((err)=>{
            console.log(err);
        })
        return token;
    }
    return "Incorrect email";
}
async function register(username, email, password, role) {
    bscript.hash(password,10,async (err, hashPassword)=>{
        if(err){
            console.log(err);
        }else{
            const query = `INSERT INTO user (username, email, password, role) VALUES ('${username}', '${email}', '${hashPassword}', '${role}');`;
            let result = await database.execute(query);
            if(result){
                return result[0].insertId;
            }
            return false;
        }
    })
}
module.exports = {
    login,
    register
}