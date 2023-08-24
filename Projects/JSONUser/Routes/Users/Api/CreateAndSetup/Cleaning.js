let express = require("express");
let router = express.Router();

let CommonFromUserCredentials = require("./Cleaning/FromUserCredentials");

router.use('/FromUserCredentials', CommonFromUserCredentials);

module.exports = router;