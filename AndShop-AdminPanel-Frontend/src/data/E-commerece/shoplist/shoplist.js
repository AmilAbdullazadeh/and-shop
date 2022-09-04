import React,{useState} from "react";

import { Link } from "react-router-dom";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
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
      options={Optioncategory1}
      onChange={handleOnchange}
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
     singleSelect="true"
      options={Optioncategory2}
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
     singleSelect="true"
      options={Optioncategory3}
    />
  );
}
//Shopcardlist
export function Shopcardlist() {
  const playerData = [
    {
      IMAGE: require('../../../assets/images/pngs/9.png'),
      PRICE: "$16,599",
      TITLE: "Bracelets",
      PRICES: "$19,799",
      RIBBON: "ribbon",
      NEW: "new",
      STAR: "star",
      STAR1: "star",
      STAR2: "star-half-o",
      STAR3: "star-o",
    },
    {
      IMAGE: require('../../../assets/images/pngs/1.png'),
      PRICE: "$599",
      TITLE: "Cup",
      PRICES: "$799",
      RIBBON: "ribbon1",
      NEW: "25%",
      STAR: "star",
      STAR1: "star-half-o",
      STAR2: "star-o",
      STAR3: "star-o",
    },
    {
      IMAGE: require('../../../assets/images/pngs/7.png'),
      PRICE: "$25,239",
      TITLE: "Stool",
      PRICES: "$34,399",
      STAR: "star",
      STAR1: "star",
      STAR2: "star",
      STAR3: "star-half-o",
    },
    {
      IMAGE: require('../../../assets/images/pngs/2.png'),
      PRICE: "$345",
      TITLE: "Video Game",
      PRICES: "$459",
      RIBBON: "ribbon1",
      NEW: "25%",
      STAR: "star",
      STAR1: "star",
      STAR2: "star-half-o",
      STAR3: "star-o",
    },
    {
      IMAGE: require('../../../assets/images/pngs/4.png'),
      PRICE: "$277",
      TITLE: "Flower Pot",
      PRICES: "$456",
      STAR: "star-half-o",
      STAR1: "star-o",
      STAR2: "star-o",
      STAR3: "star-o",
    },
    {
      IMAGE:require('../../../assets/images/pngs/8.png'),
      PRICE: "$567",
      TITLE: "Watch",
      PRICES: "$866",
      STAR: "star",
      STAR1: "star",
      STAR2: "star",
      STAR3: "star-half-o",
    },
    {
      IMAGE: require('../../../assets/images/pngs/3.png'),
      PRICE: "$455",
      TITLE: "Headset",
      PRICES: "$567",
      STAR: "star",
      STAR1: "star-half-o",
      STAR2: "star-o",
      STAR3: "star-o",
    },
    {
      IMAGE: require('../../../assets/images/pngs/5.png'),
      PRICE: "$345",
      TITLE: "Chair",
      PRICES: "$499",
      STAR: "star",
      STAR1: "star",
      STAR2: "star-half-o",
      STAR3: "star-o",
    },
    {
      IMAGE: require('../../../assets/images/pngs/6.png'),
      PRICE: "$543",
      TITLE: "Goggles",
      PRICES: "$688",
      RIBBON: "ribbon1",
      NEW: "25%",
      STAR: "star",
      STAR1: "star",
      STAR2: "star",
      STAR3: "star-half-o",
    },
  ];

  return (
    <>
      {playerData.map((playerData, k) => (
        <div className="col-md-6 col-xl-4" key={k}>
          <div className="card item-card">
            <div className="ribbone">
              <div className={` ${playerData.RIBBON}`}>
                <span>{playerData.NEW}</span>
              </div>
            </div>
            <div className="product-grid6 card-body ">
              <div className="product-image6 ">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/e-commerce/productDetails/`}
                >
                  <img src={playerData.IMAGE} className="img-fluid" alt="" />
                </Link>
                <div className="product-content text-center">
                  <div className="mb-2 text-warning">
                    <i className="me-1 fa fa-star"></i>
                    <i className={`me-1 fa fa-${playerData.STAR}`}></i>
                    <i className={`me-1 fa fa-${playerData.STAR1}`}></i>
                    <i className={`me-1 fa fa-${playerData.STAR2}`}></i>
                    <i className={`me-1 fa fa-${playerData.STAR3}`}></i>
                  </div>
                  <h4 className="title">{playerData.TITLE}</h4>
                  <div className="price">
                    {playerData.PRICE}
                    <span className="ms-4">{playerData.PRICES}</span>
                  </div>
                </div>
                <ul className="icons">
                  <li>
                    <Link
                      to={`${process.env.PUBLIC_URL}/pages/e-commerce/productDetails/`}
                      data-tip="Quick View"
                    >
                      <i className="fe fe-eye "></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${process.env.PUBLIC_URL}/pages/e-commerce/wishlist/`}
                      data-tip="Add to Wishlist"
                    >
                      <i className="fa fa-heart-o"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${process.env.PUBLIC_URL}/pages/e-commerce/shoppingCart/`}
                      data-tip="Add to Cart"
                    >
                      <i className="fa fa-shopping-cart"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

