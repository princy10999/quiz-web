import React, { useState, useEffect } from "react";
import Timer from "../Timer/Timer";
import { useNavigate, useParams } from "react-router-dom";
import coin from "../../assets/images/coin-icon.png";
import { postResponse, getResponse } from "../../Components/Api/CommonAPI";

const QuizPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [questions, setQuestions] = useState({});
  const [score, setScore] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [current, setCurrent] = useState(0);
  const [state, setState] = useState({
    score: 0,
    rightAnswer: 0,
    wrongAnswer: 0,
    current: 0,
  });

  const { id } = useParams();

  const time = new Date();
  time.setSeconds(time.getSeconds() + 20);

  localStorage.getItem("token");

  const changeStyleBtn = (right_ans, val) => {
    if (right_ans === val) {
      var element = document.getElementById(val);
      element.classList.add("correct");
    } else if (right_ans !== val) {
      var element = document.getElementById(val);
      element.classList.add("incorrect");

      var element1 = document.getElementById(right_ans);
      element1.classList.add("correct");
    }
  };

  const CheckAns = (right_ans, val) => {
    if (right_ans === val) {
      console.log("~ right_ans --------------", right_ans);
      console.log("~ val --------------", val);
      setState({
        ...state,
        score: (score + 25),
        rightAnswer: (rightAnswer + 1),
        current: (current + 1),
      });
      setScore(score + 25);
      setCurrent(current + 1);
      setRightAnswer(rightAnswer + 1);
    } else {
      setState({
        ...state,
        score: (score - 10),
        wrongAnswer: (wrongAnswer + 1),
        current: (current + 1),
      });
      setScore(score - 10);
      setCurrent(current + 1);
      setWrongAnswer(wrongAnswer + 1);
    }

    var element1 = document.getElementById(val);
    var element12 = document.getElementById(right_ans);
    element1.classList.remove("incorrect");
    element12.classList.remove("incorrect");
    element1.classList.remove("correct");
    element12.classList.remove("correct");
  };

  if (current >= questions.length) {
    navigate(`/results/${id}`, { state: { state } });
  }
  
  const GetData = async () => {
    const response = await getResponse(`api/single_contest/${id}`, {});
    setData(...data, response?.data?.data);
  };
 

  const fetchData = async () => {
    const response = await postResponse(`api/question/${id}`, {});
    setQuestions(response?.data?.data);
  };

  useEffect(() => {
    fetchData();
    GetData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="quiz-thumb-category mb-5">
          <div className="categories">{data?.sub_cat_name}</div>
          <h2>
            {data?.contest_header}
            <img src={coin} width="19" alt="coin" className="margin_left" />
          </h2>
        </div>
        <section className="queAnsBox">
          <div className="queHeader">
            <div className="question-time-numbers">
              <div className="question-correct">{rightAnswer}</div>
              <div className="answers-timer">
                <Timer expiryTimestamp={time} rightAnswer={rightAnswer} id={id} />
              </div>
              <div className="question-incorrect">{wrongAnswer}</div>
            </div>
            <div className="queNumbers">
              Question &nbsp; <span>{current + 1}</span> / {questions.length}
            </div>
          </div>

          <div className="queOptions">
            <h3 className="animate__animated animate__heartBeat">
              {questions[current]?.question}
            </h3>
            <ul>
              <li>
                <button
                  type="button"
                  id={questions[current]?.ansA}
                  className="option_btn"
                  onClick={() => {
                    changeStyleBtn(
                      questions[current]?.right_ans,
                      questions[current]?.ansA
                    );
                    setTimeout(() => {
                      CheckAns(
                        questions[current]?.right_ans,
                        questions[current]?.ansA
                      );
                    }, 400);
                  }}
                >
                  {questions[current]?.ansA}
                </button>
              </li>
              <li>
                <button
                  id={questions[current]?.ansB}
                  className="option_btn"
                  type="button"
                  onClick={() => {
                    changeStyleBtn(
                      questions[current]?.right_ans,
                      questions[current]?.ansB
                    );
                    setTimeout(() => {
                      CheckAns(
                        questions[current]?.right_ans,
                        questions[current]?.ansB
                      );
                    }, 400);
                  }}
                >
                  {questions[current]?.ansB}
                </button>
              </li>
              <li>
                <button
                  id={questions[current]?.ansC}
                  className="option_btn"
                  type="button"
                  onClick={() => {
                    changeStyleBtn(
                      questions[current]?.right_ans,
                      questions[current]?.ansC
                    );
                    setTimeout(() => {
                      CheckAns(
                        questions[current]?.right_ans,
                        questions[current]?.ansC
                      );
                    }, 400);
                  }}
                >
                  {questions[current]?.ansC}
                </button>
              </li>
              <li>
                <button
                  id={questions[current]?.ansD}
                  className="option_btn"
                  type="button"
                  onClick={() => {
                    changeStyleBtn(
                      questions[current]?.right_ans,
                      questions[current]?.ansD
                    );
                    setTimeout(() => {
                      CheckAns(
                        questions[current]?.right_ans,
                        questions[current]?.ansD
                      );
                    }, 400);
                  }}
                >
                  {questions[current]?.ansD}
                </button>
              </li>
            </ul>
          </div>

          <p className="score-points">
            Your score : <strong>{score}</strong>
          </p>
        </section>
      </div>
    </>
  );
};

export default QuizPage;
