let Repo = require("../../../../../Repository/Login/Users/Admin/ShowUsers/WithFolderCheck");

let FolderCheck = (req, res) => {

    Repo.FolderCheck({
    }).then((PromieData) => {
        res.end(JSON.stringify(PromieData));
    });
};

module.exports = { FolderCheck };