let Repo = require("../../../Repository/Users/Api/ShowUsers");

let ShowData = (req, res) => {
    let LocalUserPK = req.params.inUserPK;
    
    Repo.ShowData({
        inUserPK: LocalUserPK
    }).then((PromieData) => {
        res.end(JSON.stringify(PromieData));
    }).catch((PromiseError) => {
        res.end(JSON.stringify(PromiseError));
    });
};

module.exports = { ShowData };