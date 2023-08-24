var express = require('express');
var router = express.Router();
let CommonSetup = require("./Api/Setup");
let CommonShowUsers = require("./Api/ShowUsers");
let CommonSetupByCopy = require("./Api/SetupByCopy");
let CommonCreateAndSetup = require("./Api/CreateAndSetup");

router.use('/ShowData', require('./Api/ShowData'));
router.use('/Save', require('./Api/Save'));
router.use('/Setup', CommonSetup);
router.use('/ShowUsers', CommonShowUsers);
router.use('/SetupByCopy', CommonSetupByCopy);
router.use('/CreateAndSetup', CommonCreateAndSetup);

module.exports = router;