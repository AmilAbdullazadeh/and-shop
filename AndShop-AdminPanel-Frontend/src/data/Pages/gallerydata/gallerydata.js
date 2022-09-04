import React from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

//GalleryImages2
  function PhotobookImage({  url }) {
    return (
      <div >
       <div >
        <img className="img-responsive br-5" src={url} alt="" />
      </div></div>
    );
  }
  
  const PhotoItem = ({ image, group }) => (
    <div>
      <LightgalleryItem group={group} src={image}>
        <PhotobookImage url={image} />
      </LightgalleryItem>
    </div>
  );
  
  export function GalleryImages2 () {
    
    const images = [
      {
        id: "image1",
        className:"img-responsive br-5",
        src: require('../../../assets/images/media/1.jpg'),
      },
      {
        id: "image2",
        className:"img-responsive br-5",
        src: require('../../../assets/images/media/2.jpg')
      },
      {
        id: "image3",
        className:"img-responsive br-5",
        src: require('../../../assets/images/media/3.jpg')
      },
      {
        id: "image4",
        className:"img-responsive br-5",
        src: require('../../../assets/images/media/4.jpg')
      },
      {
        id: "image5",
        className:"img-responsive br-5",
        src: require('../../../assets/images/media/5.jpg')
      },
      {
        id: "image6",
        className:"img-responsive br-5",
        src: require('../../../assets/images/media/9.jpg')
      },
      {
        id: "image7",
        className:"img-responsive br-5",
        src:require('../../../assets/images/media/10.jpg')
      },
      {
        id: "image8",
        className:"img-responsive br-5",
        src: require('../../../assets/images/media/11.jpg'),
      },
      {
        id: "image9",
        className:"img-responsive br-5",
        src: require('../../../assets/images/media/12.jpg'),
      },
      {
        id: "image10",
        className:"img-responsive br-5",
        src: require('../../../assets/images/media/13.jpg'),
      },
      {
        id: "image11",
        className:"img-responsive br-5",
        src: require('../../../assets/images/media/1.jpg'),
      },
      {
        id: "image12",
        className:"img-responsive br-5",
        src: require('../../../assets/images/media/2.jpg'),
      },
    ];
      return (
        <div id="lightgallery" className="list-unstyled row">
          <LightgalleryProvider >
            {images.map(image => {
              return (
                <div className="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0" key={image.id}>
                <PhotoItem
                  image={`${image.src}`}
                  group="group1"
                />
                </div>
              );
            })}
          </LightgalleryProvider>
        </div>
      );
  }