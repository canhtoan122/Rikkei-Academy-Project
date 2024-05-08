const database = require("../configs/db.config");
const jwt = require("jsonwebtoken");
const bscript = require("bcrypt");
require("dotenv").config();

// async function login(username, password) {
//     const query = `SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`;
//     let result = await database.execute(query);
//     const user = result[0][0];
//     if(user){
//         const token = jwt.sign({ id: user.id, username: user.username, password:user.password, role: user.role }, process.env.SECRET_KEY_JWT, { expiresIn: "1h" });
//         return {
//             token,
//         };
//     }
//     return null;
// }
async function login(username, password) {
    const query = `SELECT * FROM user WHERE username = '${username}'`;
    let result = await database.execute(query);
    const user = result[0][0];
    if(user){
        // lấy thông tin của user ra rồi
        /*
            tiến hành lấy mật khẩu người dùng login đi so sánh với mật khẩu đã được mã hóa (nhờ bscypt) ở trong database
            - để giải mã dùng hàm compare
         */
        let mk = bscript.compare(password, user.password)
        mk.then((result)=>{
            console.log("Kết quả sau khi so sánh mật khẩu", result);
            if(result){
                // tạo jwt cho user
                const token = jwt.sign({ id: user.id, username: user.username, password:user.password, role: user.role }, process.env.SECRET_KEY_JWT, { expiresIn: "1h" });
                return {
                    token,
                };
            }
        }).catch((err)=>{
            console.log(err);
        })
    }else{
        return null;
    }
}
async function register(username, email, password, role) {
    // trước khi thêm vào database thì phải mã hóa mật khẩu của user đi
    // để mã hóa dùng thư viện bscript
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