import React, { useState, useEffect} from "react";
// import { Slider } from "infinite-react-carousel";
import axios from "axios";
// import Slider from "react-slick";

const SimpleSlider = () => {
  const [questions, setQuestions] = useState({});
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);

  // const sliderRef = useRef(null);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10000); // 20 second

  const CheckAns = (right_ans, val, index) => {
    console.log("right_ans", right_ans);
    console.log("value", val);
    console.log("index", index);
    console.log("questions.length", questions.length - 1);

    if (right_ans === current) {
      setScore(score + 25);
      setCurrent(current + 1);
      setRightAnswer(rightAnswer + 1);
    } else {
      setScore(score - 10);
      setCurrent(current + 1);
      setWrongAnswer(wrongAnswer + 1);
    }

    console.log("score", score);
  };

  const fetchData = () => {
    axios
      .post(`http://192.168.29.15:8000/api/question/1`)
      .then((response) => {
        setQuestions(response.data.data);
      })
      .catch((err) => {
        console.log("~ err", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // <Slider {...settings}>
    <div>
      <>
        <div className="queOptions">
          <h3 className="animate__animated animate__heartBeat">
            {questions[current]?.question}
          </h3>
          <ul>
            <li>
              <button
                className=" "
                type="button"
                onClick={() =>
                  CheckAns(
                    questions[current]?.right_ans,
                    questions[current]?.ansA
                  )
                }
              >
                {questions[current]?.ansA}
              </button>
            </li>
            <li>
              <button
                className=" "
                type="button"
                onClick={() =>
                  CheckAns(
                    questions[current]?.right_ans,
                    questions[current]?.ansB
                  )
                }
              >
                {questions[current]?.ansB}
              </button>
            </li>
            <li>
              <button
                className=" "
                type="button"
                onClick={() =>
                  CheckAns(
                    questions[current]?.right_ans,
                    questions[current]?.ansC
                  )
                }
              >
                {questions[current]?.ansC}
              </button>
            </li>
            <li>
              <button
                className=" "
                type="button"
                onClick={() =>
                  CheckAns(
                    questions[current]?.right_ans,
                    questions[current]?.ansD
                  )
                }
              >
                {questions[current]?.ansD}
              </button>
            </li>
          </ul>
        </div>
        <div>Score : {score}</div>
      </>
    </div>
  );
};

export default SimpleSlider;
