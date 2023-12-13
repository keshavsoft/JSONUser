let express = require("express");
let rourer = express.Router();

let CommonAllUsers = require("./Show/AllUsers");

rourer.use('/AllUsers', CommonAllUsers);