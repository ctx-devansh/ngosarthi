import React from "react";
import "./Achievements.css";
import "./NumberCount.js";
import NumberCount from "./NumberCount.js";
// import cap from "../assets/cap.png";
import school from "../assets/school.png";
import map from "../assets/map.png";
import people from "../assets/ppl.png";
import book from "../assets/book.png";
import clean from "../assets/clean.png";

const Achievements = () => {
  return (
    <div className="achievements">
      <div className="achievement-item">
        <img src={map} alt="cap" />
        <h2>
          <NumberCount value="7" suffix="+" />
        </h2>
        <p>states</p>
      </div>
      <div className="achievement-item">
        <img src={people} alt="people" />
        <h2>
          <NumberCount value="100000" suffix="+" />
        </h2>
        <p>people sensitised</p>
      </div>
      <div className="achievement-item">
        <img src={book} alt="book" />
        <h2>
          <NumberCount value="250" suffix="+" />
        </h2>
        <p>children educated</p>
      </div>
      <div className="achievement-item">
        <img src={clean} alt="clean" />
        <h2>
          <NumberCount value="1500" suffix="+" />
        </h2>

        <p>sanitary products distributed</p>
      </div>
      <div className="achievement-item">
        <img src={school} alt="school" />
        <h2>
          <NumberCount value="2" suffix="+" />
        </h2>
        <p>Sushiksha schools</p>
      </div>
    </div>
  );
};

export default Achievements;
