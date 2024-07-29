import React from "react";
import "./Achievements.css";
import "./NumberCount.js";
import NumberCount from "./NumberCount.js";

const Achievements = () => {
  return (
    <div className="achievements">
      <div className="achievement-item">
        <img src="https://i.ibb.co/7kpy0YH/mapNew.png" alt="cap" />
        <h2>
          <NumberCount value="7" suffix="+" />
        </h2>
        <p>states</p>
      </div>
      <div className="achievement-item">
        <img src="https://i.ibb.co/ctKYqc9/people-New.png" alt="people" />
        <h2>
          <NumberCount value="100000" suffix="+" />
        </h2>
        <p>people sensitised</p>
      </div>
      <div className="achievement-item">
        <img src="https://i.ibb.co/98Vwx86/education-New.png" alt="book" />
        <h2>
          <NumberCount value="250" suffix="+" />
        </h2>
        <p>children educated</p>
      </div>
      <div className="achievement-item">
        <img src="https://i.ibb.co/YcQJ7XF/sanitary-New.png" alt="clean" />
        <h2>
          <NumberCount value="1500" suffix="+" />
        </h2>

        <p>sanitary products distributed</p>
      </div>
      <div className="achievement-item">
        <img src="https://i.ibb.co/x11TFDW/school-New.png" alt="school" />
        <h2>
          <NumberCount value="2" suffix="+" />
        </h2>
        <p>Sushiksha schools</p>
      </div>
    </div>
  );
};

export default Achievements;
