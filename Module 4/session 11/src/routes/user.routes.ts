import express from "express";
import { findAllUser } from "../controllers/user.controller";
const userRouter= express.Router();

userRouter.get("/api/v1/users", findAllUser);

export default userRouter;