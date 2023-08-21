let dal = require("../../../../../Dal/Users/Api/SetupByCopy/FoldersOnly/FromPk");

exports.CreateFunc = async ({ inUserPK }) => {
    return await dal.CreateFunc({ inUserPK });
};