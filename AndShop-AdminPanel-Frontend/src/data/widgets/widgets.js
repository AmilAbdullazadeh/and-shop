
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";


//areaChart1
export const areaChart1 = {
  option: {
    xAxis: [
      {
        show: false,
        type: "category",
      },
    ],
    yAxis: [
      {
        show: false,
        type: "value",
      },
    ],

    series: [
      {
        type: "line",
        smooth: true,
        data: ["30", "70", "30", "100", "50", "130", "100"],
        color: "#0774f8",
      },
    ],
  },
};
//areaChart2
export const areaChart2 = {
  option: {
    xAxis: [
      {
        show: false,
        type: "category",
      },
    ],
    yAxis: [
      {
        show: false,
        type: "value",
      },
    ],

    series: [
      {
        type: "line",
        smooth: true,
        data: ["24", "18", "28", "21", "32", "28", "30"],
        color: "#f5334f",
      },
    ],
  },
};
//areaChart3
export const areaChart3 = {
  option: {
    xAxis: [
      {
        show: false,
        type: "category",
      },
    ],
    yAxis: [{ show: false, type: "value" }],

    series: [
      {
        type: "line",
        smooth: true,
        data: ["24", "18", "28", "21", "32", "28", "30"],
        color: "#e2a117",
      },
    ],
  },
};
//areaChart4
export const areaChart4 = {
  option: {
    xAxis: [
      {
        show: false,
        type: "category",
      },
    ],
    yAxis: [
      {
        show: false,
        type: "value",
      },
    ],

    series: [
      {
        type: "line",
        smooth: true,
        data: ["24", "18", "28", "21", "32", "28", "30"],
        color: "#1fc874",
      },
    ],
  },
};


//GalleryImageswidgets
function PhotobookImage({ url }) {
  return (
    <div>
      <div>
        <img className="d-block img-fluid br-5" src={url} alt="" />
      </div>
    </div>
  );
}

const PhotoItem = ({ image, group }) => (
  <div>
    <LightgalleryItem group={group} src={image}>
      <PhotobookImage url={image} />
    </LightgalleryItem>
  </div>
);

export function GalleryImageswidgets() {
  const images = [
    {
      id: "image1",
      className: "d-block img-fluid br-5",
      src: require('../../assets/images/media/1.jpg'),
    },
    {
      id: "image2",
      className: "d-block img-fluid br-5",
      src: require('../../assets/images/media/2.jpg'),
    },
    {
      id: "image3",
      className: "d-block img-fluid br-5",
      src: require('../../assets/images/media/13.jpg'),
    },
    {
      id: "image4",
      className: "d-block img-fluid br-5",
      src: require('../../assets/images/media/12.jpg'),
    },
    {
      id: "image5",
      className: "d-block img-fluid br-5",
      src:require('../../assets/images/media/8.jpg'),
    },
    {
      id: "image6",
      className: "d-block img-fluid br-5",
      src: require('../../assets/images/media/9.jpg'),
    },
  ];
  return (
    <div id="lightgallery" className="row img-gallery" lg-uid="lg0">
      <LightgalleryProvider>
        {images.map((image) => {
          return (
            <div className="col-4" key={image.id}>
              <PhotoItem image={`${image.src}`} className="br-5" group="group1" />
            </div>
          );
        })}
      </LightgalleryProvider>
    </div>
  );
}
