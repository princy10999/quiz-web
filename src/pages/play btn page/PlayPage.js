import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import coin from "../../assets/images/coin-icon.png";
import PriceList from "../PriceList/PriceList";
import { getResponse } from "../../Components/Api/CommonAPI";

function PlayPage() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const { id } = useParams();
  console.log(id);

  const GetData = async () => {
    const response = await getResponse(`api/single_contest/${id}`, {});
    setData(...data, response?.data?.data);
  };

  useEffect(() => {
    GetData();
  }, []);


  return (
    <div className="container">
      <div className="quizBox">
        <div className="quizBoxCategory">
          <div className="quizBoxImg">
            <img
              src="https://play159.atmequiz.com/img/english-grammer.png"
              alt="ENGLISH grammar"
            />
          </div>
          <div className="categories">{data.sub_cat_name}</div>
        </div>
        <h2>
          {data.contest_header}
          <img className="quizImgCoin" src={coin} width="19" alt="coin" />
        </h2>
        <p className="mb-16 mt-8">
          You’ve got 60 seconds to answer all questions. Answer as many
          questions as you can. Entry fee will be {data.entry_fees}
          <img className="quizImgCoin" src={coin} width="14" alt="coin" />
        </p>
        <p className="mb-16">
          Join and save the coins you win! Its free &amp; safe!
        </p>
        <br />
        {token === null ? (
          <Link className="btn pulse" to="/googleLogin">
            Join Quiz
          </Link>
        ) : (
          <Link className="btn pulse" to={`/quizPage/${data?.contest_id}`} >
            play
          </Link>
        )}
        <Link
          className={
            token === null ? "btn btn-secondary mt-16 mb-16" : "d-none"
          }
          to={`/quizPage/${data?.contest_id}`}
          
        >
          Play as Guest
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

      <div className="prizes-rules_btns mb-24">
        <PriceList></PriceList>
        <Link title="" className="btn btn-small-blue mt-16" to="/contestRules">
          Contest Rules
        </Link>
      </div>
    </div>
  );
}

export default PlayPage;
