import React, { useState } from "react";
import NavBar from "./NavBar";
import "./Media.css";

// Manually importing images
import m1 from "../assets/m1.webp";
import m2 from "../assets/m2.webp";
import m3 from "../assets/m3.webp";
import m4 from "../assets/m4.webp";
import m5 from "../assets/m5.webp";
import m6 from "../assets/m6.webp";
import m7 from "../assets/m7.webp";
import m8 from "../assets/m8.webp";
import m9 from "../assets/m9.webp";
import m10 from "../assets/m10.webp";
import m11 from "../assets/m11.webp";
import m12 from "../assets/m12.webp";
import m13 from "../assets/m13.webp";
import m14 from "../assets/m14.webp";
import m15 from "../assets/m15.webp";
import m16 from "../assets/m16.webp";
import m17 from "../assets/m17.webp";
import m18 from "../assets/m18.webp";
import m19 from "../assets/m19.webp";
import m20 from "../assets/m20.webp";
import m21 from "../assets/m21.webp";
import m22 from "../assets/m22.webp";
import { Nav } from "react-bootstrap";

// Store images in an array
const images = [
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  m8,
  m9,
  m10,
  m11,
  m12,
  m13,
  m14,
  m15,
  m16,
  m17,
  m18,
  m19,
  m20,
  m21,
  m22,
];

const Media = () => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  // Looping through our images array to create img elements
  const imageCards = images.map((image, index) => (
    <img
      key={index}
      className="image-card"
      onClick={() => showImage(image)}
      src={image}
      alt={`Image ${index + 1}`}
    />
  ));

  // Function to show a specific image in the lightbox and make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  // Hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  // Show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    let nextImage = images[(currentIndex + 1) % images.length];
    setImageToShow(nextImage);
  };

  // Show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    let prevImage = images[(currentIndex + images.length - 1) % images.length];
    setImageToShow(prevImage);
  };

  return (
    <>
      <NavBar />
      <div className="media-container">
        <div className="gallery">{imageCards}</div>
        {lightboxDisplay && (
          <div id="lightbox" onClick={hideLightBox}>
            <button className="prev-btn" onClick={showPrev}>
              <svg
                fill="#F0F0F0"
                height="100px"
                width="100px"
                version="1.1"
                id="XMLID_54_"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g id="previous">
                  <g>
                    <polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 		" />
                  </g>
                </g>
              </svg>
            </button>
            <img id="lightbox-img" src={imageToShow} alt="Lightbox" />
            <button className="next-btn" onClick={showNext}>
              <svg
                fill="#F0F0F0"
                height="100px"
                width="100px"
                version="1.1"
                id="XMLID_287_"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g id="next">
                  <g>
                    <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 		" />
                  </g>
                </g>
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Media;
