import React,{useState} from "react";
import pngs1 from "../../../assets/images/pngs/1.png";
import pngs2 from "../../../assets/images/pngs/2.png";
import pngs6 from "../../../assets/images/pngs/6.png";
import pngs3 from "../../../assets/images/pngs/3.png";
import pngs4 from "../../../assets/images/pngs/4.png";
import pngs7 from "../../../assets/images/pngs/7.png";
import pngs8 from "../../../assets/images/pngs/8.png";
import pngs5 from "../../../assets/images/pngs/5.png";
import { Carousel } from "react-bootstrap";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { Link } from "react-router-dom";

//Category
export function Category() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const Optioncategory = [
    {
      value: "category-1",
      label: "--Select--",
    },
    {
      value: "category-2",
      label: "Dress",
    },
    {
      value: "category-3",
      label: "Canada",
    },
    {
      value: "category-4",
      label: "Bags &amp; Purses",
    },
    {
      value: "category-5",
      label: "Coat &amp; Jacket",
    },
    {
      value: "category-6",
      label: "Beauty",
    },
    {
      value: "category-7",
      label: "Jeans",
    },
    {
      value: "category-8",
      label: "Jewellery",
    },
    {
      value: "category-9",
      label: "Electronics",
    },
    {
      value: "category-10",
      label: "Sports",
    },
    {
      value: "category-11",
      label: "Technology",
    },
    {
      value: "category-12",
      label: "Watches",
    },
    {
      value: "category-13",
      label: "Accessories",
    },
  ];
  return (
    <MultiSelect
      name="beast"
      id="select-beasts"
      className=" farm"
      options={Optioncategory}
      onChange={handleOnchange}
       placeholder="--Select--"
singleSelect="true"
    />
  );
}
//Brand
export function Brand() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const Optioncategory1 = [
    {
      value: "category-2",
      label: "White",
    },
    {
      value: "category-3",
      label: "Black",
    },
    {
      value: "category-4",
      label: "Red",
    },
    {
      value: "category-5",
      label: "Green",
    },
    {
      value: "category-6",
      label: "Blue",
    },
    {
      value: "category-7",
      label: "Yellow",
    },
  ];
  return (
    <MultiSelect
      id="select-beasts"
      name="beast"
      className=" farm"
      options={Optioncategory1}
      onChange={handleOnchange}
       placeholder="--Select--"
singleSelect="true"
    />
  );
}
//Type
export function Type() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const Optioncategory2 = [
    {
      value: "category-1",
      label: "--Select--",
    },
    {
      value: "category-2",
      label: "Extra Small",
    },
    {
      value: "category-3",
      label: "Small",
    },
    {
      value: "category-4",
      label: "Medium",
    },
    {
      value: "category-5",
      label: "Large",
    },
    {
      value: "category-6",
      label: "Extra Large",
    },
  ];
  return (
    <MultiSelect
      id="select-beasts"
      name="beast"
      className=" farm"
      onChange={handleOnchange}
       placeholder="--Select--"
      options={Optioncategory2}
singleSelect="true"
    />
  );
}
//Color
export function Color() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const Optioncategory3 = [
    {
      value: "category-1",
      label: "--Select--",
    },
    {
      value: "category-2",
      label: "White",
    },
    {
      value: "category-3",
      label: "Black",
    },
    {
      value: "category-4",
      label: "Red",
    },
    {
      value: "category-5",
      label: "Green",
    },
    {
      value: "category-6",
      label: "Blue",
    },
    {
      value: "category-7",
      label: "Yellow",
    },
  ];
  return (
    <MultiSelect
      id="select-beasts"
      name="beast"
      className=" farm"
      onChange={handleOnchange}
       placeholder="--Select--"
      options={Optioncategory3}
singleSelect="true"
    />
  );
}
//Counrtcheckout
export function Counrtcheckout() {
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
  const optionCounteryout = [
    {
      value: "category-1",
      label: "--Select--",
    },
    {
      value: "category-2",
      label: "Germany",
    },
    {
      value: "category-3",
      label: "Canada",
    },
    {
      value: "category-4",
      label: "Usa",
    },
    {
      value: "category-5",
      label: "Aus",
    },
  ];
  return (
    <MultiSelect
      name="beast"
      className=" farm"
      options={optionCounteryout}
      onChange={handleOnchange}
       placeholder="--Select--"
singleSelect="true"
    />
  );
}
//Carouseldatalist
const Carouseldata = [
  {
    IMG: pngs1,
    TITLE: "Cup",
    PRICE: "$999.00",
    PRICE2: "$799.00",
    BUY: "primary",
  },
  {
    IMG: pngs2,
    TITLE: "Video Game",
    PRICE: "$87.00",
    PRICE2: "$25.00",
    BUY: "secondary",
  },
  {
    IMG: pngs3,
    TITLE: "Headset",
    PRICE: "$59.00",
    PRICE2: "$34.00",
    BUY: "success",
  },
  {
    IMG: pngs4,
    TITLE: "Flower pot",
    PRICE: "$54.00",
    PRICE2: "$39.00",
    BUY: "info",
  },
  {
    IMG: pngs5,
    TITLE: "Royal Chair",
    PRICE: "$37.00",
    PRICE2: "$25.00",
    BUY: "danger",
  },
  {
    IMG: pngs7,
    TITLE: "Stool",
    PRICE: "$35.00",
    PRICE2: "$19.00",
    BUY: "warning",
  },
  {
    IMG: pngs8,
    TITLE: "Clock",
    PRICE: "$35.00",
    PRICE2: "$19.00",
    BUY: "secondary",
  },
  {
    IMG: pngs6,
    TITLE: "Goggles",
    PRICE: "$45.00",
    PRICE2: "$29.00",
    BUY: "secondary",
  },
];
export function Carouseldatalist() {
  return (
    <>
      <Carousel indicators={false}>
        {Carouseldata.map((playerData, k) => (
          <Carousel.Item key={k}>
            <img className="pro_img br-5" alt="Product" src={playerData.IMG} />
            <div className="carouselproduct mt-4 text-center pb-4">
              <h5 className="">
                <Link to={`${process.env.PUBLIC_URL}/pages/e-commerce/shoppingCart/`}>
                  {playerData.TITLE}
                </Link>
              </h5>
              <ul className="product_price list-unstyled">
                <li className="old_price">{playerData.PRICE}</li>
                <li className="new_price">{playerData.PRICE2}</li>
              </ul>
              <div className="mb-3 mt-2 text-warning">
                <i className=" me-1 fa fa-star"></i>
                <i className="me-1 fa fa-star"></i>
                <i className="me-1 fa fa-star"></i>
                <i className="me-1 fa fa-star-o"></i>
                <i className="me-1 fa fa-star-o"></i>
              </div>
              <Link
                to={`${process.env.PUBLIC_URL}/pages/e-commerce/shoppingCart/`}
                className={`btn btn-${playerData.BUY}`}
              >
                <i className="ti-shopping-cart"></i> Buy Now
              </Link>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
