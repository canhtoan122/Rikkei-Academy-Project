import { Request, Response } from "express";
import { findAll } from "../services/user.service";

export const findAllUser = async (req:Request, res:Response) =>{
    try {
        const user = await findAll();
        return res.status(200).json({
            data:user[0]
        })
    } catch (error) {
        console.log(error);
    }
}