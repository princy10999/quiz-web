import React, { useState, useEffect } from "react";
import axios from "axios";
import coin from "../../assets/images/coin-icon.png";

const CoinHistory = () => {
  const [getHistory, setGetHistory] = useState({});

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://192.168.29.15:8000/api/coin-history/1`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setGetHistory(response);
          console.log("response ---", response);
        })
        .catch((err) => {
          console.log("~ err --------------", err);
        });
    };
    fetchData();
  }, [token]);

  return (
    <div className="container">
      <section className="coin-history">
        <h1>Coins History</h1>
        <div className="history-list">
          <div className="quiz-thumb">
            <img
              src="	https://play159.atmequiz.com/img/bollywood.png"
              alt=""
              width="54"
            />
          </div>
          <div className="quiz-name-date">
            <h4>Sign up Bonus</h4>

            <span className="history-bedge earned">Earned</span>
            <span> August 25th 2022</span>
          </div>
          <div className="earned-paid-coins">
            <img src={coin} width="19" alt="coin" /> 200
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoinHistory;
