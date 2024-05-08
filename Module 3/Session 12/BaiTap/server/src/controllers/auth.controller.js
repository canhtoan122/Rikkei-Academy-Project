const authService = require("../services/auth.service.js");

async function login (req, res){
    const { email, password } = req.body;
    const user = await authService.login(email, password);
    res.status(200).json({
        data: user
    })
}
async function register (req, res){
    const { username, email, password, role } = req.body;
    const user = await authService.register(username, email, password, role);
    res.status(200).json({
        message: "Create new user success with ID: " + user
    })
}
module.exports = {
    login,
    register
}