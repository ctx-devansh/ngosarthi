import { Box, Typography } from "@mui/material";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./../assets/anim2.json"; // Update the path
import "./OurCompass.css"; // Import the updated CSS file

function OurCompass() {
  return (
    <Box
      sx={{
        height: "auto", // Accommodate dynamic content size
        width: "100vw",
        backgroundColor: "#f9f9f9",
        // padding: "2rem", // Add padding to prevent collision with bottom components
        boxSizing: "border-box", // Ensure padding is included in the height calculation
      }}
    >
      <div className="our-compass-container">
        <div className="our-compass-content">
          <h1 className="our-compass-main-title" data-shadow="Our Compass">
            <h3 className="our-compass-title">
              Lending a Helping Hand Across India
            </h3>
            <br />
            Our <span className="our-compass-main-title-span">Compass</span>
          </h1>
          <p className="our-compass-description">
            <span>
              As per the Union Education Ministry, <strong>15 crore</strong>{" "}
              children are studying in 15 lakh schools in the country. They can
              be served through this project. <br />
              <span>
                This project aims to make a difference in the education sector.
              </span>
            </span>
            <span>
              The United Nations has set the global goal of inclusive and
              quality education for all by <strong>2030</strong> as part of the
              Sustainable Development Goals.
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt
            </span>
          </p>
          <button className="our-compass-button">Learn More</button>
        </div>
        <Player
          autoplay
          loop
          src={animationData}
          style={{ width: "500px", height: "300x" }}
        />
      </div>
    </Box>
  );
}

export default OurCompass;
