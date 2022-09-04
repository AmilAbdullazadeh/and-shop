var express = require('express');
var router = express.Router();
const master = require("../controller/master");
const baseHelper = require("../helper/bashelpers");
var multer = require("./multer");


//category
router.post("/insertEditCategory",baseHelper.CheckAdminToken, master.insertEditCategory);
router.post("/categroyList",baseHelper.CheckAdminToken, master.categoryList);
router.post("/deleteCategory",baseHelper.CheckAdminToken, master.deleteCategory);
router.get("/fetchCategoryName", master.fetchCategoryName);

//product
router.post("/insertEditProduct",baseHelper.CheckAdminToken,multer.array("img"), master.insertEditProduct);
router.post("/productList",baseHelper.CheckAdminToken, master.productList);
router.post("/deleteProduct",baseHelper.CheckAdminToken, master.deleteProduct);
router.get("/fetchParentName", master.fetchParentName);


module.exports = router;
