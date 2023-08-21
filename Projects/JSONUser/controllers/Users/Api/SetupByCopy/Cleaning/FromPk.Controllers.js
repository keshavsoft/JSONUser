let Repo = require("../../../../../Repository/Users/Api/SetupByCopy/Cleaning/FromPk");

let CreateFunc = (req, res) => {
    let LocalUserPK = req.params.inUserPK;

    let ResData = Repo.CreateFunc({
        inUserPK: LocalUserPK
    });

    res.status(200).json(ResData);
};

module.exports = { CreateFunc };