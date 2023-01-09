// let CommonUserFuncs = require("../../../../../DataSupply/Fs/LoginFolder/UserDataJson/PullData/FromFile");

let ShowData = async ({inUserPK}) => {
    let LocalReturnData = await CommonUserFuncs.StartFunc({inUserPK});

    if (LocalReturnData.KTF) {
        return await LocalReturnData.JsonData.data;
    }
};

module.exports = { ShowData };