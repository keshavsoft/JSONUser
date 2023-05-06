let Repo = require("../../../../../Repository/Login/Users/Admin/ShowUsers/WithFolderCheck");
const decompress = require('decompress');

let FolderCheck = (req, res) => {
    Repo.FolderCheck({
    }).then((PromieData) => {
        res.end(JSON.stringify(PromieData));
    });
};

let PostFunc = (req, res) => {
    console.log("11111111111111 : ", req.file);

    decompress(req.file.originalname, `dist/${req.file.fieldname}`).then(files => {
        console.log('done!', files[0]);
    });

    res.end("");
};


module.exports = { FolderCheck, PostFunc };