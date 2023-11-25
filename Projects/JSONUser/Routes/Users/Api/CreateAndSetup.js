let express = require("express");
let router = express.Router();

let CommonCleaning = require("./CreateAndSetup/Cleaning");
let CommonForChat = require("./CreateAndSetup/ForChat");

router.use('/Cleaning', CommonCleaning);
router.use('/ForChat', CommonForChat);

module.exports = router;