const express = require('express');
const checkExist = require("../middleware/checkExist.js");
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    let data = fs.readFileSync(`./ask-community-project/dev-data/todos.json`, "utf8");
    res.send(data);
});
router.get('/:id', checkExist, (req, res, next) => {
    let data = fs.readFileSync(`./ask-community-project/dev-data/todos.json`, "utf8");
    data = JSON.parse(data);
    let newId = req.params.id;
    let result = data.findIndex((item, index, array) => {
        return item.id == newId;
    });
    if (result == -1) {
        res.send("There are no user of that id.");
    } else {
        res.send(data[result]);
    }
});
router.post('/', checkExist, (req, res, next) => {
    const { id, userId, title, completed } = req.body;
    let data = fs.readFileSync(`./ask-community-project/dev-data/todos.json`, "utf8");
    data = JSON.parse(data);
    let newObj = {
        userId: userId,
        id: id,
        title: title,
        completed: completed
    }
    data.push(newObj);

    fs.writeFileSync(`./ask-community-project/dev-data/todos.json`, JSON.stringify(data));
    res.send("Create successfully");
});
router.put('/:id', checkExist, (req, res, next) => {
    const { userId, title, completed } = req.body;
    let data = fs.readFileSync(`./ask-community-project/dev-data/todos.json`, "utf8");
    data = JSON.parse(data);
    let newId = req.params.id;
    let result = data.findIndex((item, index, array) => {
        return item.id == newId;
    });
    let newObj = data[result];
    newObj.userId = userId;
    newObj.title = title;
    newObj.completed = completed;
    data[result] = newObj;
    fs.writeFileSync(`./ask-community-project/dev-data/todos.json`, JSON.stringify(data));
    res.send("Update successfully");
});
router.delete('/:id', checkExist, (req, res, next) => {
    let data = fs.readFileSync(`./ask-community-project/dev-data/todos.json`, "utf8");
    data = JSON.parse(data);
    let newId = req.params.id;
    let result = data.findIndex((item, index, array) => {
        return item.id == newId;
    });
    data.splice(result, 1);
    fs.writeFileSync(`./ask-community-project/dev-data/todos.json`, JSON.stringify(data));
    res.send('Delete successfully!');
});
module.exports = router