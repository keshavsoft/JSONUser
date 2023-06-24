var express = require('express');
var router = express.Router();
let CommonInUserGroupsJson = require("./Users/InUserGroupsJson");

router.use('/InUserGroupsJson', CommonInUserGroupsJson);

module.exports = router;