const express = require("express");
const UserController = require("../controller/user.controller.js");
const userRouter = express.Router();

// Tạo api lấy hết tất cả danh sách các user
userRouter.get("/api/v1/users", (req, res) =>{
    UserController.getAllUser(req, res);
});
module.exports = userRouter;