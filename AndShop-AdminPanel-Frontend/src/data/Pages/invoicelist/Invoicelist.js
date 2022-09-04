import React from "react";
import { Table } from "react-bootstrap";


//Tableinvoice
const Datainvoice = [
  {
    ID: "1",
    TITLE: "Logo Design",
    LINE: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    NUMBER: "2",
    PRICE: "$674",
    SUBTOTAL: "$1,308",
  },
  {
    ID: "2",
    TITLE: "Website wireframe for 2 pages",
    LINE: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    NUMBER: "4",
    PRICE: "$1,500",
    SUBTOTAL: "$6,000",
  },
  {
    ID: "3",
    TITLE: "PSD to HTML coding",
    LINE: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    NUMBER: "3",
    PRICE: "$530",
    SUBTOTAL: "$1,690",
  },
  {
    ID: "4",
    TITLE: "E-commerce Development",
    LINE: "When our power of choice is untrammelled and when nothing prevents our being able",
    NUMBER: "2",
    PRICE: "$800",
    SUBTOTAL: "$1,600",
  },
  {
    ID: "5",
    TITLE: "Design and layout of 2 pages in Photoshop",
    LINE: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    NUMBER: "2",
    PRICE: "$720",
    SUBTOTAL: "$1,440",
  },
];

export function Tableinvoice() {
  return (
    <Table className="table table-bordered table-hover mb-0 text-nowrap border-bottom">
      <tbody>
        <tr>
          <th className="text-center"></th>
          <th>ITEM</th>
          <th className="text-center">QUANTITY</th>
          <th className="text-end">UNIT PRICE</th>
          <th className="text-end">SUB TOTAL</th>
        </tr>

        {Datainvoice.map((list, index) => (
          <tr key={index} className="border-bottom">
            <td className="text-center">{list.ID}</td>
            <td>
              <p className="font-w600 mb-1">{list.TITLE}</p>
              <div className="text-muted">{list.LINE}</div>
            </td>
            <td className="text-center">{list.NUMBER}</td>
            <td className="text-end">{list.PRICE}</td>
            <td className="text-end">{list.SUBTOTAL}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="4" className="fw-bold text-uppercase text-end">
            Total
          </td>
          <td className="fw-bold text-end h4">$12,038</td>
        </tr>
      </tbody>
    </Table>
  );
}

export function Printpage(){
 const print=()=>{
    window.print();
}
  return (

     
  <div className="card-footer text-end">
              <button
                type="button"
                className="btn btn-primary mb-1 me-2"
                // string="javascript:window.print();"
                onClick={print}
              >
                <i className="si si-wallet"></i> Pay Invoice
              </button>
              <button
                type="button"
                className="btn btn-success mb-1 me-2"
                // string="javascript:window.print();"
                onClick={print}
              >
                <i className="si si-paper-plane"></i> Send Invoice
              </button>
              <button
                type="button"
                className="btn btn-info mb-1 me-2"
                // string="javascript:window.print();"
                onClick={print}
              >
                <i className="si si-printer"></i> Print Invoice
              </button>
            </div>

  );
}