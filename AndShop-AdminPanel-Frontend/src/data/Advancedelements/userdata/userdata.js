import React,{useState} from "react";
import { Table } from "react-bootstrap";
import user18 from "../../../assets/images/users/18.jpg";
import user1 from "../../../assets/images/users/1.jpg";
import user8 from "../../../assets/images/users/8.jpg";
import user19 from "../../../assets/images/users/19.jpg";
import user12 from "../../../assets/images/users/12.jpg";
import user15 from "../../../assets/images/users/15.jpg";
import user16 from "../../../assets/images/users/16.jpg";
import user4 from "../../../assets/images/users/4.jpg";
import user3 from "../../../assets/images/users/3.jpg";
import user2 from "../../../assets/images/users/2.jpg";
import user5 from "../../../assets/images/users/5.jpg";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
//Category

export function Category() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const Options = [
    {
      value: "category-1",
      label: "Latest",
    },
    {
      value: "category-2",
      label: "Older",
    },
  ];
  return (
    <MultiSelect options={Options} onChange={handleOnchange}  placeholder="--Select--" singleSelect="true" />
  );
}
//Tableuserdata
export function Tableuserdata() {
  const Datauser = [
    { IMG: user1, NAME: "Adam Cotter", DATE: "09 Dec 2017", ID: 1 },
    { IMG: user18, NAME: "Pauline Noble", DATE: "	26 Jan 2018", ID: 2 },
    { IMG: user19, NAME: "Sherilyn Metzel", DATE: "27 Jan 2018", ID: 3 },
    { IMG: user12, NAME: "Terrie Boaler", DATE: "20 Jan 2018", ID: 4 },
    { IMG: user15, NAME: "Rutter Pude", DATE: "13 Jan 2018", ID: 5 },
    { IMG: user16, NAME: "Clifford Benjamin", DATE: "25 Jan 2018", ID: 6 },
    { IMG: user4, NAME: "Thedric Romans", DATE: "12 Jan 2018", ID: 7 },
    { IMG: user8, NAME: "Haily Carthew", DATE: "	27 Jan 2018", ID: 8 },
    { IMG: user16, NAME: "Dorothea Joicey", DATE: "12 Dec 2017", ID: 9 },
    { IMG: user3, NAME: "Mikaela Pinel", DATE: "	10 Dec 2017", ID: 10 },
    { IMG: user2, NAME: "Donnell Farries", DATE: "	03 Dec 2017", ID: 11 },
    { IMG: user5, NAME: "Letizia Puncher", DATE: "09 Dec 2017", ID: 12 },
  ];
  return (
    <Table className="border-top table-bordered">
      <thead>
        <tr>
          <th className="">Select</th>
          <th className="">Photo</th>
          <th>Name</th>
          <th>Date</th>
          <th className="">Actions</th>
        </tr>
      </thead>
      <tbody>
        {Datauser.map((list, index) => (
          <tr key={index} className="border-bottom">
            <td className="align-middle ">
              <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                <input
                  className="custom-control-input"
                  id={`item-${list.ID}`}
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor={`item-${list.ID}`}
                ></label>
              </div>
            </td>
            <td className="align-middle ">
              <img alt="" className="avatar avatar-md br-7" src={list.IMG} />
            </td>
            <td className="text-nowrap align-middle">{list.NAME}</td>
            <td className="text-nowrap align-middle">
              <span>{list.DATE}</span>
            </td>
            <td className="align-middle">
              <div className="btn-group align-top">
                <button className="btn btn-sm btn-primary badge" type="button">
                  Edit
                </button>
                <button className="btn btn-sm btn-primary badge" type="button">
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
