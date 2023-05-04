var express = require('express');
var router = express.Router();
let controllers = require("../../../../../controllers/Login/Users/Admin/ShowUsers/WithFolderCheck.Controllers");

router.get('/',controllers.FolderCheck);

module.exports = router;