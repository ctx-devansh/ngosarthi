import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./../assets/anim1.json"; // Update the path
import "./Mission.css"; // Import the CSS file

const MissionComponent = () => {
  return (
    <div className="container">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "450px", width: "520px" }}
      />
      <div className="content">
        <h1 className="main-title" data-shadow="Mission">
          <h3 className="title">NGO FOR CHILDREN'S</h3>
          <br></br>
          Mission: An NGO For <h1 className="main-title-span">Education</h1>
        </h1>
        <p className="description">
          <span>
            As per the Union Education Ministry, <strong>15 crore</strong>{" "}
            children are currently out of the school system in India.
          </span>
          <span>
            The United Nations has set the global goal of inclusive and quality
            education for all by <strong>2030</strong> as part of the
            Sustainable Development Goals.
          </span>
          <span>
            To achieve this target, our <strong>NGO in Delhi</strong> is
            providing quality education, free of cost!
          </span>
          <span>
            So far, more than <strong>1000</strong> underprivileged students
            have been taught by our diligent volunteers.
          </span>
          <span>Click below to contribute!</span>
        </p>
        <button className="button">Create a change</button>

        <div className="social-links">
          <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#">
            <i className="bi bi-whatsapp"></i>
          </a>
          <p className="footer">
            Or you can also help by spreading awareness of our mission
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionComponent;
