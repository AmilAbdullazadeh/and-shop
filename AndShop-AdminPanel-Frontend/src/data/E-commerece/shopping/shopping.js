import React from "react";
import { OverlayTrigger, Tooltip, Table } from "react-bootstrap";

//ShoppingData
const Datacard = [
  {
    PRODUCT: require('../../../assets/images/pngs/1.png'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$568",
    Quantity: 1 ,
  },
  {
    PRODUCT: require('../../../assets/images/pngs/2.png'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 3,
  },
  {
    PRODUCT: require('../../../assets/images/pngs/3.png'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 4,
  },
  {
    PRODUCT: require('../../../assets/images/pngs/4.png'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 3,
  },
  {
    PRODUCT: require('../../../assets/images/pngs/5.png'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 2,
  },
  {
    PRODUCT: require('../../../assets/images/pngs/6.png'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 1,
  },
  {
    PRODUCT: require('../../../assets/images/pngs/7.png'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 3,
  },
  {
    PRODUCT: require('../../../assets/images/pngs/8.png'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,589",
    Quantity: 4,
  },
];

export function ShoppingData() {
  function dec(el){
    let unit = el.target.parentElement.querySelector('input').value;
     if( unit === 0){
       return false;
     }
     else{
       el.target.parentElement.querySelector('input').value--
     }
   }
   function inc(el){
     el.target.parentElement.querySelector('input').value++
   }
  return (
    <Table className="table table-bordered table-vcenter text-nowrap mb-0 border-top">
      <thead>
        <tr>
          <th className="w-5">PRODUCT</th>
          <th>TITLE</th>
          <th>PRICE</th>
          <th className="w-15">QUANTITY</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {Datacard.map((list, index) => (
          <tr key={index}  className="border-bottom">
            <td>
              <img src={list.PRODUCT} className="cart-img" alt="" />
            </td>
            <td>{list.TITLE}</td>
            <td className="fw-bold">{list.PRICE} </td>
            <td >
              <div className="input-group input-indec">
                <button className="counter-minus btn btn-light" onClick={dec}>
                  -
                </button>
                <input
                  type="text"
                  defaultValue={list.Quantity}
                  className="form-control text-center qty"
                />
                <button className="counter-plus btn btn-light" onClick={()=>inc}>
                  +
                </button>
              </div>
            </td>
            <td>
              <div className="button-list">
              <OverlayTrigger placement="top" overlay={<Tooltip >Save for Wishlist</Tooltip>}>
              <i
                  className="btn btn-square btn-danger-light me-1"
                  title="Save for Wishlist"
                >
              <i className="icon icon-heart  fs-13 mt-3"></i>
              </i>
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip >Remove</Tooltip>}>
                <i
                  className="btn btn-square btn-info-light me-1"
                  title="Remove"
                >
                  <i className="icon icon-trash fs-13"></i>
                </i>
                </OverlayTrigger>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
