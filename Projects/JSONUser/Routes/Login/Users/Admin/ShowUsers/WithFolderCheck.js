var express = require('express');
var router = express.Router();
let controllers = require("../../../../../controllers/Login/Users/Admin/ShowUsers/WithFolderCheck.Controllers");
const multer = require('multer');
const decompress = require('decompress');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "");
    },
    filename: function (req, file, cb) {
        console.log("file : ", file);
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage });

router.get('/', controllers.FolderCheck);
router.post('/1', upload.single("inFile"), (req, res) => {
    console.log("file : ", req.file.originalname);

    decompress(req.file.originalname, 'dist').then(files => {
        console.log('done!', files[0]);
    });

    res.end("");
});

router.post('/', upload.single("inFile"), controllers.PostFunc);

module.exports = router;