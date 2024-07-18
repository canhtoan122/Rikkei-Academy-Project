import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes";
const app = express();
const port = 8000;
dotenv.config();

app.use("/",userRouter);
app.get("", (req, res) =>{
    res.send("Hello World");
})
app.listen(port, ()=>{
    console.log(`Đang gọi đến server http://localhost:${port}`);
    
})