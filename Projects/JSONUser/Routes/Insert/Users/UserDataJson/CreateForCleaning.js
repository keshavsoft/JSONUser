let express = require("express");
let router = express.Router();

let Repo = require("../../../../Repository/Insert/Users/UserDataJson/CreateForCleaning");

router.get('/:inUserName/:inPassWord', (req, res) => {
    let localinUserName = req.params.inUserName;
    let localinPassword = req.params.inPassWord;

    let Response = Repo.GetFunc({
        inUserName: localinUserName,
        inPassword: localinPassword
    });

    res.status(200).json(Response);
});

module.exports = router;