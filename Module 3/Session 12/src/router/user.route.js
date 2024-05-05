const express = require("express");
const UserController = require("../controllers/user.controller.js");
const AuthController = require("../controllers/auth.controller.js");
const userRouter = express.Router();

// Tạo api lấy hết tất cả danh sách các user
userRouter.get("/api/v1/users", (req, res) =>{
    UserController.getAllUser(req, res);
});
userRouter.post("/api/v1/login", (req, res) =>{
    AuthController.login(req, res);
});
userRouter.post("/api/v1/register", (req, res) =>{
    AuthController.register(req, res);
});
module.exports = userRouter;