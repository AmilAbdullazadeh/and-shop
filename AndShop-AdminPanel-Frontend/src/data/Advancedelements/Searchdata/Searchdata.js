import React, { useState } from "react";
import user14 from "../../../assets/images/users/14.jpg";
import user11 from "../../../assets/images/users/11.jpg";
import user12 from "../../../assets/images/users/12.jpg";
import user13 from "../../../assets/images/users/13.jpg";
import user4 from "../../../assets/images/users/4.jpg";
import user2 from "../../../assets/images/users/2.jpg";
import user1 from "../../../assets/images/users/1.jpg";
import user5 from "../../../assets/images/users/5.jpg";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import * as rating from "../../../data/Rating/rating";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
//Tablesearchdata
const Datasearch = [
  {
    IMG: user14,
    NAME: "Mens Jackets",
    NUMBER: "50% off",
    PRICE: "$1,987",
    Color: "primary",
  },
  {
    IMG: user11,
    NAME: "Occational Special Edition",
    NUMBER: "60% off",
    PRICE: "$2,679",
    Color: "success",
  },
  {
    IMG: user4,
    NAME: "Saree ",
    NEW: "New",
    BG: "primary",
    NUMBER: "25% off",
    PRICE: "$999",
    Color: "warning",
  },
  {
    IMG: user13,
    NAME: "Western Wear",
    NUMBER: "30% off	",
    PRICE: "$699",
    Color: "info",
  },
  {
    IMG: user12,
    NAME: "Kids Dress",
    NEW: "New",
    BG: "default",
    NUMBER: "	47% off",
    PRICE: "$399",
    Color: "primary",
  },
  {
    IMG: user2,
    NAME: "Kids Toys",
    NUMBER: "26% off",
    PRICE: "$299",
    Color: "success",
  },
  {
    IMG: user4,
    NAME: "Sony KD-49XE7005 ",
    NEW: "New",
    BG: "primary",
    NUMBER: "43% off",
    PRICE: "$22,269",
    Color: "warning",
  },
  {
    IMG: user2,
    NAME: "Huawei Mate Pro Dual SIM",
    NUMBER: "20% off",
    PRICE: "$9,999",
    Color: "info",
  },
  {
    IMG: user5,
    NAME: "Novel Books ",
    NEW: "New",
    BG: "default",
    NUMBER: "14% off",
    PRICE: "$899",
    Color: "primary",
  },
  {
    IMG: user1,
    NAME: "Welcare Fitness",
    NUMBER: "40% off",
    PRICE: "$3,987",
    Color: "success",
  },
];
export function Tablesearchdata() {
  return (
    <Table className="table card-table table-vcenter text-nowrap">
      <tbody>
        {Datasearch.map((list, index) => (
          <tr key={index}>
            <td>
              <span
                className="avatar avatar-md brround mt-1"
                style={{ backgroundImage: `url(${list.IMG})` }}
              ></span>
            </td>
            <td>
              {list.NAME}
              <span className={`badge badge-md bg-${list.BG}`}>{list.NEW}</span>
            </td>
            <td>
              <div className="star-ratings start-ratings-main clearfix">
                <div className="stars stars-example-fontawesome">
                  <rating.CustomizedRating
                    id="example-fontawesome"
                    name="rating"
                    autoComplete="off"
                  />
                </div>
              </div>
            </td>
            <td
              className={`d-none d-md-table-cell text-nowrap text-end text-${list.Color}`}
            >
              {list.NUMBER}
            </td>
            <td className="text-end">
              <strong>{list.PRICE}</strong>
            </td>
            <td className="text-end">
              <Link to="#" className="btn btn-primary btn-sm text-white me-2">
                view
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
//Singleselect13
export function Singleselect13() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const options = [
    
      {
        value: "Group-1",
        label: "--Select--",
      },
      {
        value: "Group-2",
        label: "Foot wear",
      },
      {
        value: "Group-3",
        label: "Top wear",
      },
      {
        value: "Group-4",
        label: "Bootom wear",
      },
      {
        value: "Group-5",
        label: "Mens Groming",
      },
      {
        value: "Group-6",
        label: "Accessories",
      },
  ];
  return (
    <MultiSelect
      onChange={handleOnchange}
       placeholder="--Select--"
      singleSelect="true"
      options={options}
   
    />
  );
}
//Singleselect1s
export function Singleselect1s() {
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
  const Options = [
    { label: "--Select--", value: "--Select--" },
    { label: "Western wear", value: "Western wear" },
    { label: "Foot wear", value: "Foot wear" },
    { label: "Top wear", value: "Top wear" },
    { label: "Bootom wear", value: "Bootom wear" },
    { label: "Beuty Groming", value: "Beuty Groming" },
    { label: "Accessories", value: "Accessories" },
    { label: "jewellery", value: "jewellery" },
  ];
  return (
    <MultiSelect options={Options} onChange={handleOnchange}
     placeholder="--Select--" singleSelect="true" />
  );
}
//Singleselect1w
export function Singleselect1w() {
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
   const Options = [
     { label: "--Select--", value: "--Select--" },
     { label: "Boys clothing", value: "Boys clothing" },
     { label: "girls Clothing", value: "girls Clothing" },
     { label: "Toys", value: "Toys" },
     { label: "Baby Care", value: "Baby Care" },
     { label: "Kids footwear", value: "Kids footwear" },
   ];
  return (
    <MultiSelect options={Options} onChange={handleOnchange}
     placeholder="--Select--" singleSelect="true" />
  );
}
//Singleselect1ele
export function Singleselect1ele() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const options = [
    { label: "--Select--", value: "--Select--" },
    { label: "Mobiles", value: "Mobiles" },
    { label: "Laptops", value: "Laptops" },
    { label: "Gaming & Accessories", value: "Gaming & Accessories" },
    { label: "Health care Appliances", value: "Health care Appliances" },
  ];
  return (
    <MultiSelect options={options} onChange={handleOnchange}
     placeholder="--Select--" singleSelect="ture" />
  );
}
//Singleselect1book

export const Singleselect1book = () => {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };

  const options = [
    { label: "--Select--", value: "--Select--" },
    { label: "Stationery", value: "Stationery" },
    { label: "Books", value: "Books" },
    { label: "Gaming", value: "Gaming" },
    { label: "Music", value: "Music" },
    { label: "Exercise & fitness", value: "Exercise & fitness" },
  ];

  return (
    <div className="form-group">
      <MultiSelect onChange={handleOnchange}
       placeholder="--Select--" options={options} singleSelect="true" />
    </div>
  );
};
