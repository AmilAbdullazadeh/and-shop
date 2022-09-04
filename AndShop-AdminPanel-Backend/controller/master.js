const { json } = require("express");
var dbConfig = require("../database/dbConfig");

//category
async function insertEditCategory(req, res) {
    try {
        const { Aid, id, name, parentid } = req.body;
        const getData = await dbConfig("category_master").where("id", id).first();

        var data = {
            name: name,
            parent_id:parentid
        }

        if (getData) {
            data.updateAt = new Date()
            data.updateBy = Aid
          var update =   await dbConfig("category_master").where("id", id).update(data);
            await dbConfig("logs").insert({
              event_Id: Aid,
              event_name: "category",
              type: "Update",
              createAt: new Date(),
              createBy: id,
            });
            return res.json({
                status: true,
                msg: "category updated!!",
                data: update
            })
        }

        else {
            data.createAt = new Date();
            data.createBy = Aid

            var insert = await dbConfig("category_master").insert(data)
            await dbConfig("logs").insert({
              event_Id: insert[0],
              event_name: "categroy",
              type: "Insert",
              createAt: new Date(),
              createBy:Aid,
            });
            return res.json({
                status: true,
                msg: " category inserted!!",
                data: insert
            })
        }
        
    } catch (err) {
        return res.json({
            status: false,
            msg: err.message
        })
    }
}

async function categoryList(req, res){
    try {
        var getData = await dbConfig("category_master as c")
          .leftJoin("category_master as p", "c.parent_id" ,"=" ,"p.id")
          .select("c.id", "c.name", "c.parent_id","p.name as parent_name")
          .where("c.is_delete",0);
        // console.log(getData);
        return res.json({
            status: true,
            data: getData   
        })
    } catch (err) {
        return res.json({
            status: false,
            msg:err.message
        })
}
}
async function fetchCategoryName(req, res) {
  try {
    var getData = await dbConfig("category_master")
      .select("name","id")
      .where("parent_id", 0);
    // console.log(getData);
    return res.json({
      status: true,
      data: getData,
    });
  } catch (err) {
    return res.json({
      status: false,
      msg: err.message,
    });
  }
}

async function deleteCategory(req, res) {
    try {
        const { Aid, id } = req.body;
        await dbConfig("category_master").where("id", id).update("is_delete", 1)
        await dbConfig("logs").insert({
          event_Id:id,
          event_name: "categroy",
          type: "delete",
          createAt: new Date(),
          createBy: Aid,
        });
        return res.json({
            status: true,
            msg:"Deleted Data!!!"
        })
        
    } catch (err) {
        return res.json({
            status: false,
            msg:err.message,
        })
    }
}

// product
async function insertEditProduct(req, res) {
  try {
    const { Aid, id, categoryid, parentid, name, desc, sprice, mrprice } = req.body;

    var getData = await dbConfig("product_master").where("p_id", id).first();
    // console.log(req.files);
    var img = []
    for (var el in req.files) {
      // console.log(req.files);
      img.push(req.files[el].originalname);
    }
    // console.log(req.files)
    var data = {
      // p_id: id,
      id: categoryid,
      parent_id: parentid,
      name: name,
      description: desc,
      sales_price: sprice,
      mrp: mrprice,
      image: JSON.stringify(img)
    };

    if (getData) {
      data.updateAt = new Date();
      data.updateBy = Aid
      await dbConfig("product_master").where("p_id", id).update(data)
      await dbConfig("logs").insert({
        event_Id: id,
        event_name: "product",
        type: "update",
        createAt: new Date(),
        createBy: Aid,
      });
      return res.json({
        status: true,
        msg:"Updated Successfully!!!"
      })
    }
    else {
      data.createAt = new Date();
      data.createBy = Aid
      var insert = await dbConfig("product_master").insert(data);
      await dbConfig("logs").insert({
        event_Id: insert[0],
        event_name: "product",
        type: "Insert",
        createAt: new Date(),
        createBy: Aid,
      });
      return res.json({
        status: true,
        msg: "Inserted Successfully!!"
      })
    }



  } catch (err) {
    return res.json({
      status: false,
      msg:err.message
    })
  }
}

async function productList(req, res) {
  try {
    const { } = req.body;
    var getData = await dbConfig("product_master as p")
      .leftJoin("category_master as c","p.id","=","c.id")
      .leftJoin("category_master as sub","p.parent_id","=","sub.id")
      .select("p.p_id", "p.id", "p.parent_id", "p.name", "p.description", "p.sales_price", "p.mrp", "p.image", "c.name as category_name","sub.name as sub_name")
      .where("p.is_delete", 0)
      // .andWhere("p.id","=","c.id")
    return res.json({
      status: true,
      data:getData
    })
    
  }
  catch (err) {
    return res.json({
      status: false,
      msg:err.message
    })
  }
}

async function deleteProduct(req, res) {
 try {
   const { Aid, id } = req.body;
   await dbConfig("product_master").where("p_id", id).update("is_delete", 1);
   await dbConfig("logs").insert({
     event_Id: id,
     event_name: "product",
     type: "delete",
     createAt: new Date(),
     createBy: Aid,
   });
   return res.json({
     status: true,
     msg: "Deleted Data!!!",
   });
 } catch (err) {
   return res.json({
     status: false,
     msg: err.message,
   });
 }
}

async function fetchParentName(req, res){
  try {
      var getData = await dbConfig("category_master as c")
        .leftJoin("category_master as p", "c.parent_id", "=", "p.id")
        .select("c.id", "c.name", "c.parent_id", "p.name as parent_name")
        .where("c.parent_id", "!=", 0);
  
      return res.json({
        status: true,
        data: getData,
      });
  } catch (err) {
    return res.json({
      status: false,
      msg: err.message
    })
   }
}

const master = {
  //category
  insertEditCategory,
  categoryList,
  deleteCategory,
  fetchCategoryName,
  //product
  insertEditProduct,
  productList,
  deleteProduct,
  fetchParentName,
};

module.exports = master;