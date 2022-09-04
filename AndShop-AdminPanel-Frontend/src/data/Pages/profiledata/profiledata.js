import React from 'react';

import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
  function PhotobookImage({  url }) {
    return (
      <div >
       <div >
        <img className="img-fluid mb-2 br-7" src={url} alt="" />
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
  
  export function GalleryImagesprofile () {
    
    const images = [
      {
        id: "image1",
        className:"img-fluid mb-2 br-7",
        src:require('../../../assets/images/media/1.jpg'),
      },
      {
        id: "image2",
        className:"img-fluid mb-2 br-7",
        src: require('../../../assets/images/media/2.jpg')
      },
      {
        id: "image3",
        className:"img-fluid mb-2 br-7",
        src: require('../../../assets/images/media/3.jpg')
      },
      {
        id: "image4",
        className:"img-fluid mb-2 br-7",
        src: require('../../../assets/images/media/4.jpg')
      },
      {
        id: "image5",
        className:"img-fluid mb-2 br-7",
        src:require('../../../assets/images/media/8.jpg')
      },
      {
        id: "image6",
        className:"img-fluid mb-2 br-7",
        src: require('../../../assets/images/media/9.jpg')
      },
      {
        id: "image7",
        className:"img-fluid mb-2 br-7",
        src: require('../../../assets/images/media/10.jpg'),
      },
      {
        id: "image8",
        className:"img-fluid mb-2 br-7",
        src: require('../../../assets/images/media/11.jpg'),
      },
      {
        id: "image9",
        className:"img-fluid mb-2 br-7",
        src: require('../../../assets/images/media/12.jpg'),
      },
      {
        id: "image10",
        className:"img-fluid mb-2 br-7",
        src: require('../../../assets/images/media/13.jpg'),
      },
      {
        id: "image11",
        className:"img-fluid mb-2 br-7",
        src: require('../../../assets/images/media/4.jpg'),
      },
      {
        id: "image12",
        className:"img-fluid mb-2 br-7",
        src: require('../../../assets/images/media/1.jpg'),
      },
    ];
      return (
        <div id="lightgallery" className="row mb-5 img-gallery" lg-uid="lg0">
          <LightgalleryProvider >
            {images.map(image => {
              return (
                <div className="col-lg-3 col-md-6" key={image.id}>
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