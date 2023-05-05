var express = require('express');
var router = express.Router();

let CommonUpload = require("./UserFolder/Upload");

router.use('/Upload', CommonUpload);

module.exports = router;