import React from "react";
import "./Achievements.css";
import "./NumberCount.js";
import NumberCount from "./NumberCount.js";

const Achievements = () => {
  return (
    <div className="achievements">
      <div className="achievement-item">
        <h2>
          <NumberCount value="501" suffix="+" />
        </h2>
        <p>states</p>
      </div>
      <div className="achievement-item">
        <h2>
          <NumberCount value="999" suffix="+" />
        </h2>
        <p>people sensitised</p>
      </div>
      <div className="achievement-item">
        <h2>
          <NumberCount value="500" suffix="+" />
        </h2>
        <p>children educated</p>
      </div>
      <div className="achievement-item">
        <h2>
          <NumberCount value="100" suffix="+" />
        </h2>
        <p>sanitary products distributed</p>
      </div>
      <div className="achievement-item">
        <h2>
          <NumberCount value="10" suffix="+" />
        </h2>
        <p>Sushiksha schools</p>
      </div>
      <div className="achievement-item">
        <h2>
          <NumberCount value="5" suffix="+" />
        </h2>
        <p>Outreach Centres</p>
      </div>
    </div>
  );
};

export default Achievements;
