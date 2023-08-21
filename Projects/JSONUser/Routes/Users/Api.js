var express = require('express');
var router = express.Router();
let CommonSetup = require("./Api/Setup");
let CommonShowUsers = require("./Api/ShowUsers");
let CommonSetupByCopy = require("./Api/SetupByCopy");

router.use('/ShowData', require('./Api/ShowData'));
router.use('/Save', require('./Api/Save'));
router.use('/Setup', CommonSetup);
router.use('/ShowUsers', CommonShowUsers);
router.use('/SetupByCopy', CommonSetupByCopy);

module.exports = router;