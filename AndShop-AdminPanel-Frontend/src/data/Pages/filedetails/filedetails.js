import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { Link } from "react-router-dom";
function PhotobookImage({ url }) {
  return <img className="img-responsive br-5" src={url} alt="" />;
}

const PhotoItem = ({ image, group }) => (
  <LightgalleryItem group={group} src={image}>
    <PhotobookImage url={image} />
  </LightgalleryItem>
);
export function GalleryImageswidgets() {
  const images = [
    {
      id: "image1",
      className: "img-responsive br-5",
      src: require("../../../assets/images/media/files/01.jpg"),
      alt: "Thumb-2",
    },
    {
      id: "image2",
      className: "img-responsive br-5",
      src: require("../../../assets/images/media/files/02.jpg"),
      alt: "Thumb-2",
    },
    {
      id: "image3",
      className: "img-responsive br-5",
      src: require("../../../assets/images/media/files/03.jpg"),
      alt: "Thumb-2",
    },
    {
      id: "image4",
      className: "img-responsive br-5",
      src: require("../../../assets/images/media/files/04.jpg"),
      alt: "Thumb-2",
    },
    {
      id: "image5",
      className: "img-responsive br-5",
      src: require("../../../assets/images/media/files/05.jpg"),
      alt: "Thumb-2",
    },
    {
      id: "image6",
      className: "img-responsive br-5",
      src: require("../../../assets/images/media/files/06.jpg"),
      alt: "Thumb-2",
    },
  ];

  return (
    <LightgalleryProvider>
      <ul id="lightgallery" className="list-unstyled row">
        {images.map((image) => {
          return (
            <li
              key={image.id}
              className="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0"
            >
              <Link to="#">
                <PhotoItem image={`${image.src}`} group="group1" />
              </Link>
            </li>
          );
        })}
      </ul>
    </LightgalleryProvider>
  );
}
