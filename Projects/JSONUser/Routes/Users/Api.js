var express = require('express');
var router = express.Router();
let CommonSetup = require("./Api/Setup");
let CommonShowUsers = require("./Api/ShowUsers");

router.use('/ShowData', require('./Api/ShowData'));
router.use('/Save', require('./Api/Save'));
router.use('/Setup', CommonSetup);
router.use('/ShowUsers', CommonShowUsers);

module.exports = router;