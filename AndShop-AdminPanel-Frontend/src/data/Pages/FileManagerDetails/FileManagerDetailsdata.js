import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
export function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="item me-4">
          <div className="card overflow-hidden border p-0 mb-0 bg-white">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
            >
              <img
                src={require("../../../assets/images/media/files/03.jpg")}
                alt="img"
                height={124}
                className="w-100"
              />
            </Link>
            <div className="card-footer">
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">image2.jpg</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">66 KB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card overflow-hidden border p-0 mb-0 bg-white">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
              className="mx-auto my-3"
            >
              <img
                src={require("../../../assets/images/media/files/pdf.png")}
                alt="img"
              />
            </Link>
            <div className="card-footer">
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">file.pdf</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">32 KB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card overflow-hidden border p-0 mb-0 bg-white">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
            >
              <img
                src={require("../../../assets/images/media/files/07.jpg")}
                alt="img"
                height={124}
                className="w-100"
              />
            </Link>
            <div className="card-footer">
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">image1.jpg</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">76 KB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card overflow-hidden border p-0 mb-0 bg-white">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
              className="mx-auto my-3"
            >
              <img
                src={require("../../../assets/images/media/files/excel.png")}
                alt="img"
              />
            </Link>
            <div className="card-footer">
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">excel.xls</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">34 KB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card overflow-hidden border p-0 mb-0 bg-white">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
            >
              <img
                src={require("../../../assets/images/media/files/06.jpg")}
                alt="img"
                height={124}
                className="w-100"
              />
            </Link>
            <div className="card-footer">
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">nature.jpg</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">66 KB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card overflow-hidden border p-0 mb-0 bg-white">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
              className="mx-auto my-3"
            >
              <img
                src={require("../../../assets/images/media/files/ppt1.png")}
                alt="img"
              />
            </Link>
            <div className="card-footer">
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">demo.ppt</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">67 KB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card overflow-hidden border p-0 mb-0 bg-white">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
            >
              <img
                src={require("../../../assets/images/media/files/02.jpg")}
                alt="img"
                height={124}
                className="w-100"
              />
            </Link>
            <div className="card-footer">
              <div className="d-flex">
                <div className="d-flex">
                  <h5 className="mb-0 fw-semibold text-break">image1.jpg</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">76 KB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
