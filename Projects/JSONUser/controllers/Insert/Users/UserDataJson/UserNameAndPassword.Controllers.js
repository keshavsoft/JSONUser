let Repo = require("../../../../Repository/Insert/Users/UserDataJson/UserNameAndPassword");

let StartFunc = async (res, req) => {
    let Response = await Repo.StarFunc();

    res.status(200).json(Response)
};

module.exports = { StartFunc };