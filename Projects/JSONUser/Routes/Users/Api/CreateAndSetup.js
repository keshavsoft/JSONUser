let express = require("express");
let router = express.Router();

let CommonCleaning = require("./CreateAndSetup/Cleaning");
let CommonForChat = require("./CreateAndSetup/ForChat");
let CommonForBlak = require("./CreateAndSetup/Blak");

router.use('/Cleaning', CommonCleaning);
router.use('/ForChat', CommonForChat);
router.use('/Blak', CommonForBlak);

module.exports = router;