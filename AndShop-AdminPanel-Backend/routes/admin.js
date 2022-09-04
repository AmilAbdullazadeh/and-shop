var express = require('express');
var router = express.Router();
const admin = require("../controller/admin")

router.post("/insertEditAdmin", admin.insertEditAdmin);
router.post("/adminlogin", admin.Adminlogin);
module.exports = router;
