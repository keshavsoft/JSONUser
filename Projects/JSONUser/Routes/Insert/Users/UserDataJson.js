var express = require('express');
var router = express.Router();
let CommonUserNameAndPassword = require("./UserDataJson/UserNameAndPassword");

router.use('/UserNameAndPassword', CommonUserNameAndPassword);

module.exports = router;