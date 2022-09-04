import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
// import BackToTop from "react-back-to-top";
const TabToTop = () => {
     const [BacktoTop, setBacktopTop] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktopTop("d-block");
      } else setBacktopTop("");
    });
  }, []);
  const screenup = () => {
    window.scrollTo({
      top: 10,
      behavior: "auto",
      //   smooth
    });
  };
  return (
    <div >
      <Link to="#" id="back-to-top" onClick={screenup} className={`${BacktoTop}`}>
        <i className="fa fa-angle-up"></i>
      </Link>
    </div>
  );
};

export default TabToTop;

