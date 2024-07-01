import React from "react";
import "./Achievements.css";
import "./NumberCount.js";
import NumberCount from "./NumberCount.js";

const Achievements = () => {
  return (
    <div className="achievements">
      <div className="achievement-item">
        <p>Reached</p>
        <h2>
          <NumberCount value="7" suffix="+" />
        </h2>
        <p>states</p>
      </div>
      <div className="achievement-item">
        <h2>
          <NumberCount value="100000" suffix="+" />
        </h2>
        <p>people sensitised</p>
      </div>
      <div className="achievement-item">
        <h2>
          <NumberCount value="250" suffix="+" />
        </h2>
        <p>children educated</p>
      </div>
      <div className="achievement-item">
        <h2>
          <NumberCount value="1500" suffix="+" />
        </h2>
        <p>sanitary products distributed</p>
      </div>
      <div className="achievement-item">
        <h2>
          <NumberCount value="2" suffix="+" />
        </h2>
        <p>Sushiksha schools</p>
      </div>
    </div>
  );
};

export default Achievements;
