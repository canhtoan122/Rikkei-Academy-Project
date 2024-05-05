var express = require('express');
var router = express.Router();
const fs = require("fs");
router.get('/form', (req, res) => {
    let data = JSON.parse(fs.readFileSync("./data/db.json", "utf-8"));
    let users = data.profile;
    res.render("AddUsers", {users})
})
function generateId() {
    // Generate a unique ID using the current timestamp
    const timestamp = new Date().getTime();
    // Add a random number to ensure uniqueness
    const random = Math.floor(Math.random() * 1000);
    // Combine timestamp and random number to create the ID
    return timestamp + random;
}
router.post('/post', (req, res) => {
    const { username, password } = req.body;
    let data = JSON.parse(fs.readFileSync("./data/db.json", "utf-8"));
    let users = data.profile;
    let newId = generateId();
    let newUser = {
        id: newId,
        username: username,
        password: password
    }
    users.push(newUser);
    fs.writeFileSync(`./data/db.json`, JSON.stringify(data));
    res.send(data);
})
router.post('/delete', (req, res) => {
    const { id } = req.body;
    let data = JSON.parse(fs.readFileSync("./data/db.json", "utf-8"));
    let users = data.profile;
    console.log(req.body.username);
    fs.writeFileSync(`./data/db.json`, JSON.stringify(data));
    res.send(data);
})
module.exports = router