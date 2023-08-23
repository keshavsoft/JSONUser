let express = require("express");
let router = express.Router();

let Controllers = require("../../../../controllers/Insert/Users/UserDataJson/UserNameAndPassword.Controllers");

router.get('/:inUserName/:inPassWord', Controllers.StartFunc);

module.exports = router;