let dal = require("../../../../../Dal/Users/Api/CreateAndSetup/Blank/ForCredentials");

exports.Save = async ({ inUserName, inPassword }) => {
    return await dal.Save({ inUserName, inPassword });
};