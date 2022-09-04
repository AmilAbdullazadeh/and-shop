import React from "react";
import { Link } from "react-router-dom";

//Wishlistdata
export function Wishlistdata() {
  const Datawishlist = [
    {
      IMG: require('../../../assets/images/pngs/1.png'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$568",
      STATUS: "stock ",
      bgColor: "success",
    },
    {
      IMG: require('../../../assets/images/pngs/9.png'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$1,027",
      STATUS: "instock",
      bgColor: "danger",
    },
    {
      IMG: require('../../../assets/images/pngs/1.png'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$1,589",
      STATUS: "stock",
      bgColor: "success",
    },
    {
      IMG: require('../../../assets/images/pngs/2.png'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$356",
      STATUS: "stock",
      bgColor: "success",
    },
    {
      IMG: require('../../../assets/images/pngs/3.png'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$1,245",
      STATUS: "instock",
      bgColor: "danger",
    },
    {
      IMG: require('../../../assets/images/pngs/4.png'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$783",
      STATUS: "stock",
      bgColor: "success",
    },
    {
      IMG: require('../../../assets/images/pngs/5.png'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$4,876",
      STATUS: "stock",
      bgColor: "success",
    },
    {
      IMG: require('../../../assets/images/pngs/6.png'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$13,876",
      STATUS: "stock",
      bgColor: "success",
    },
  ];

  return (
    <table className="table table-bordered border table-vcenter text-nowrap">
      <thead>
        <tr className="border-top">
          <th className="w-15">Product</th>
          <th className="w-5">Title</th>
          <th className="w-15">Price</th>
          <th className="w-10">Status</th>
          <th className="w-10">Action</th>
        </tr>
      </thead>
     
        <tbody>
        {Datawishlist.map((playerData, whshlist) => (
          <tr  key={whshlist}>
            <td>
              <img src={playerData.IMG} alt="" className="cart-img" />
            </td>
            <td>{playerData.TITLE}</td>
            <td className="fw-bold">{playerData.PRICE}</td>
            <td>
              <span className={`badge bg-${playerData.bgColor}`}>
                {playerData.STATUS}
              </span>
            </td>
            <td>
              <Link
                to={`${process.env.PUBLIC_URL}/pages/e-commerce/productDetails/`}
                className="btn btn-primary-light btn-square  br-50 m-1"
                title=""
              >
                <i className="fe fe-eye fs-13"></i>
              </Link>
              <Link
                to={`${process.env.PUBLIC_URL}/pages/e-commerce/shoppingCart/`}
                className="btn btn-info-light btn-square  br-50 m-1"
                title=""
              >
                <i className="fe fe-shopping-cart fs-13"></i>
              </Link>
              <Link
                to={`${process.env.PUBLIC_URL}/pages/e-commerce/shoppingCart/`}
                className="btn btn-danger-light btn-square  br-50 m-1"
                title=""
              >
                <i className="fe fe-trash fs-13"></i>
              </Link>
            </td>
          </tr>
            ))}
        </tbody>
    
    </table>
  );
}
