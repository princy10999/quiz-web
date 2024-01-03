import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import coin from "../../assets/images/coin-icon.png";
import { getResponse } from "../../Components/Api/CommonAPI";
import Footer from "../footer/Footer";

const IplCricket = () => {
  const [data, setData] = useState({});

  const GetData = async () => {
    const response = await getResponse(`api/contest/2`, {});
    setData(response?.data?.data);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      <div className="contestData_map">
        {data.length > 0 &&
          data.map((val, i) => {
            return (
              <div className="quizContentList " key={i}>
                <div className="quizCard">
                  <div className="quizCardContent">
                    <div className="quizCardImg">
                      <img
                        src="https://play159.atmequiz.com/img/english-grammer.png"
                        alt="BUSINESS Contest Quiz"
                      />
                    </div>
                    <div className="quizNameStatus">
                      <div className="quizCategory">
                        <span className="quizCategories">
                          {val.sub_cat_name}
                        </span>
                        <span className="statusLive">
                          <button className=" live_btn ring"></button>Live
                        </span>
                      </div>
                      <h3 className="quizDescription">
                        {val.contest_header}
                        <img
                          className="quizImgCoin"
                          src={coin}
                          width="16"
                          alt="coin"
                        />
                      </h3>
                      <p className="quizResult">
                        winner announcement {val?.result_time}
                      </p>
                    </div>
                  </div>
                  <div className="quizFooter">
                    <p className="quizFooterText">
                      {val?.entry_fees === 0 ? (
                        <span>Free Entry</span>
                      ) : (
                        <span>
                          Entry : <strong>{val?.entry_fees}</strong>
                          <img
                            className="quizImgCoin"
                            src={coin}
                            width="16"
                            alt="coin"
                          />
                        </span>
                      )}
                      <span>
                        <strong>1234</strong> Users Playing
                      </span>
                    </p>
                    <Link
                      title=""
                      className="btn btn-small"
                      to={`/play/${val.contest_id}`}
                      state={val}
                    >
                      Play
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Footer/>
    </div>
  );
};

export default IplCricket;
