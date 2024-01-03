import React from "react";
import { Link } from "react-router-dom";
import coin from "../../assets/images/coin-icon.png";

function Submit() {
  return (
    <div className="container">
      <div className="quizBox">
        <img className="mb-16" src={coin} alt="coins" />
        <h1 className="">You have got 200 coins</h1>
        <p className="mb-24 mt-8">
          Check out more quizzes to test your skills and keeps grabbing more
          coins!
        </p>
        <Link className="btn  mb-16" to="/">
          Play Now
        </Link>
      </div>
      <section className="advertize">
        <div className="container">
          <div className="advert-wrapper gray-box undefined p-8">
            <span>Sponsored </span>
            <div className="d-flex justify-content-center addvert-code">
              <div style={{ width: "100%", backgroundColor: "black" }}>
                <h1>advertise portion</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="points">
        <h2>Play Quiz and Win Coins!</h2>
        <ul>
          <li>Get coins on the completion of each quiz.</li>
          <li>Upgrade your skills with our top quizzes.</li>
          <li>
            We have many top trending categories like Cricket, World, India,
            Business &amp; many more!
          </li>
          <li>Millions of quiz admirer like you showed trust on us.</li>
          <li>Challenge lakhs of players from across the world!</li>
        </ul>
      </section>
    </div>
  );
}

export default Submit;
