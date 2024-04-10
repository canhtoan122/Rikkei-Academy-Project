const fs = require('fs');

const checkExist = (req, res, next) => {
    const { id, title } = req.body;
    // lấy data ở trên db về
    // kiểm tra role của user xem có phải là admin hay không
    let data = fs.readFileSync(`./ask-community-project/dev-data/todos.json`, "utf8");
    data = JSON.parse(data);
    let newId = req.params.id;
    let result = data.findIndex((item, index, array) => {
        return item.id == newId;
    });
    let check = data.findIndex((item, index, array) => {
        return item.title == title;
    });
    if (result == -1 && id === undefined) {
        let message = {
            message: "Todo not found."
        }
        res.send(message);
    } else if(check != -1 && id !== undefined) {
        let message = {
            message: "Todo already exists."
        }
        res.send(message);
    }else{
        next();
    }
}
module.exports=checkExist;