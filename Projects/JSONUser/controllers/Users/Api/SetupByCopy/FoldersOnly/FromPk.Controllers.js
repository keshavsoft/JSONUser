let Repo = require("../../../../../Repository/Users/Api/SetupByCopy/FoldersOnly/FromPk");

let CreateFunc = (req, res) => {
    let LocalUserPK = req.params.inUserPK;

    let ResData = Repo.CreateFunc({
        inUserPK: LocalUserPK
    });

    res.status(200).json(ResData);
};

module.exports = { CreateFunc };