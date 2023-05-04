var express = require('express');
var router = express.Router();

let CommonShowUsers = require("./Admin/ShowUsers")

router.use('/ShowUsers', CommonShowUsers);

module.exports = router;