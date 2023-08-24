let Repo = require("../../../../Repository/Insert/Users/UserDataJson/UserNameAndPassword");

let StartFunc = async (res, req) => {
    let localinUserName = req.params.inUserName;
    let localinPassword = req.params.inPassword;

    let Response = await Repo.StarFunc({
        inPassword: localinUserName,
        inPassword: localinPassword
    });

    res.status(200).json(Response)
};

module.exports = { StartFunc };