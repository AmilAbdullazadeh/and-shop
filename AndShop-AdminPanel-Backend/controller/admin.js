var dbConfig = require("../database/dbConfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function insertEditAdmin(req, res) {
  try {
    const { id, name, email, password } = req.body;

    const getData = await dbConfig("admin").where("id", id).first();

    const salt = bcrypt.genSaltSync(10);
    var data = {
      name: name,
      email: email,
      password: bcrypt.hashSync(password, salt),
    };
    if (getData) {
      data.updateAt = new Date();
      data.updateBy = 1;

      await dbConfig("admin").where("id", id).update(data);
      await dbConfig("logs").insert({
        event_Id: id,
        event_name: "Admin",
        type: "UPDATE",
        createAt: new Date(),
        createBy: 1,
      });
      return res.json({
        status: true,
        msg: "updated successfully!!",
      });
    } else {
      data.createAt = new Date();
      data.createBy = 1;

      var insert = await dbConfig("admin").insert(data);
      await dbConfig("logs").insert({
        event_Id: insert[0],
        event_name: "Admin",
        type: "Insert",
        createAt: new Date(),
        createBy: 1,
      });
      return res.json({
        status: true,
        msg: "inserted successfully!!",
      });
    }
  } catch (err) {
    return res.json({
      status: false,
      msg: err.message,
    });
  }
}

async function Adminlogin(req, res) {
  try {
    const { name, email, password } = req.body;
    var getAdmin = await dbConfig("admin")
      .where("email", email)
      .where("isdelete", 0)
      .first();
    // console.log(getAdmin);
    const checkpassword = bcrypt.compareSync(password, getAdmin.password);
    // console.log(checkpassword);
    if (checkpassword) {
      const jwtSecretKey = process.env.SECRET;
      // console.log("SECRET", process.env.SECRET);
      const token = jwt.sign(
        { id: getAdmin.id, name: getAdmin.name }, jwtSecretKey,{ expiresIn: "1h",}
      );
      // console.log(token);
      return res.json({
        status: true,
        msg: "login Successfully!!",
        data: getAdmin,
        token: token,
      });
    } else {
      return res.json({
        status: false,
        msg: "login unsuccessfull",
        data: admin,
      });
    }
  } catch (err) {
    return res.json({
      status: false,
      msg: err.message,
    });
  }
}

const admin = {
  insertEditAdmin,
  Adminlogin,
};
module.exports = admin;
