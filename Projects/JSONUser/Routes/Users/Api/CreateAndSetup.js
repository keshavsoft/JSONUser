let express = require("express");
let router = express.Router();

let CommonCleaning = require("./CreateAndSetup/Cleaning");

router.use('/Cleaning', CommonCleaning);

module.exports = router;