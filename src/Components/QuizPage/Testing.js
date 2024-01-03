import React from "react";
// import Slider from "react-slick";
// import Timer from "../Timer/Timer";
import Qution from "./Qution";
import coin from "../../assets/images/coin-icon.png";

const Testing = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10000);

  return (
    <div>
      <>
        <div className="container">
          <div className="quiz-thumb-category mb-5">
            <div className="categories">SPORTS</div>
            <h2>
              Play and Win 50000
              <img src={coin} width="19" alt="coin" />
            </h2>
          </div>
          <div>
            <Qution></Qution>
          </div>
        </div>
      </>
    </div>
  );
};

export default Testing;
