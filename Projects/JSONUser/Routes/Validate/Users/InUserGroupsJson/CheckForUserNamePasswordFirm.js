let express = require("express");
let router = express.Router();

let Repo = require("../../../../Repository/Validate/Users/InUserGroupsJson/ForCredentials");
let CommonMiddleware = require("../../../../Middleware/Validate/Users/InUserGroupsJson/CheckForUserNamePasswordFirm")

let CommonjwtFunc = require("../../../../../../common/Jwt/ForUserGroupsJson");

router.post('/', CommonMiddleware.CheckForUserNamePasswordFirm, (req, res,) => {
    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassWord;
    let LocalFirmName = req.body.inFirmName;

    Repo.ForUserPasswordFirm({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord,
        inFirmName: LocalFirmName
    }).then(PromiseData => {
        if (PromiseData.kPK > 0) {
            CommonjwtFunc.CreateToken({
                inDataPk: PromiseData.kPK
            }).then(PromiseDataFromJwt => {
                res.end(PromiseDataFromJwt.KToken);
            });
        };
    });
});

module.exports = router;