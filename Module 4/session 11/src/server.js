"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
const port = 8000;
dotenv_1.default.config();
app.use("/", user_routes_1.default);
app.get("", (req, res) => {
    res.send("Hello World");
});
app.listen(port, () => {
    console.log(`Đang gọi đến server http://localhost:${port}`);
});
