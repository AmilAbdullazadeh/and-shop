var multer = require("multer");
var path =require("path")
var severPath = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        // console.log(file, path);
       cb(
         null,
         file.fieldname + path.extname(file.originalname)
       );
    }
});

var multer = multer({ storage: severPath });
module.exports = multer;
