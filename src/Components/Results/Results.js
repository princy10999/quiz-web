import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import coin from "../../assets/images/coin-icon.png";
import { getResponse } from "../../Components/Api/CommonAPI";
import ContestsData from "../../pages/home/ContestsData";

const Results = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const location = useLocation([]);
  const resultData = location.state?.state;

  const GetData = async () => {
    const response = await getResponse(`api/single_contest/${id}`, {});
    setData(...data, response?.data?.data);
  };
  console.log("data", data);
  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="container">
      <div className="quiz-thumb-category pb-16">
        <div className="categories">{data?.sub_cat_name}</div>
        <h2>
          Play and Win 250000 <img src={coin} width="19" alt="coin" />
        </h2>
      </div>
      <div className="dashboard-container">
        <div className="well-played-score">
          <h1>Time is over! Well Played</h1>
          <p>Winner announcement will be @ 2:30 PM</p>
          <div className="score">
            <img
              className="pulse"
              src="https://play159.atmequiz.com/img/trophy.svg"
              alt="trophy"
            />
            <span>
              Your current score is <br />
              <strong className="animate__animated animate__heartBeat">
                {resultData?.score}
              </strong>
            </span>
          </div>
          <p className="animate__animated animate__fadeIn pulse p_margin">
            Based on your current score, you can win 200{" "}
            <img src={coin} width="19" alt="coin" />
          </p>
        </div>
        <div className="container text-center">
          <p>Join AtmeQuiz to claim your coins</p>

          <Link className={token === null ? "btn" : "d-none"} to="/googleLogin">
            Join Quiz
          </Link>

          <Link
            className={
              token === null ? "btn btn-secondary mt-16 mb-16" : "d-none"
            }
            to="/"
          >
            Play as Guest
          </Link>
        </div>
        <div className="more-options">
          <ul>
            <li>
              <h2>54</h2>
              <p className=" p_margin">Current Rank</p>
            </li>
            <li>
              <h2>{resultData?.current}</h2>
              <p className=" p_margin">Total Questions</p>
            </li>
            <li>
              <h2>{resultData?.rightAnswer}</h2>

              <p className=" p_margin">Correct Answer</p>
            </li>
            <li>
              <h2>{resultData?.wrongAnswer}</h2>
              <p className=" p_margin">Wrong Answer</p>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="mt-2 text-center">Play More Quizzes</h2>
      <ContestsData id={id}/>
    </div>
  );
};

export default Results;
