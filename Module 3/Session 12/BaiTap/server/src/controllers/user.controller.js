const userService = require("../services/user.service.js");
async function getAllUser(req, res){
    let users = await userService.getAllUser();
    res.send(users);
}
module.exports = {
    getAllUser
}