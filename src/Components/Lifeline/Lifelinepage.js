import React from "react";
import { Link } from 'react-router-dom';

const LifelinePage = () => {
  return (
    <div>
      <div className='popup use-coins-free-lifeline'>
        <div className='popup-header'>
          <div className='quiz-thumb'>
            <img src='/img/fifty-50.svg' alt='Quiz thumbnial'/>
          </div>
          <Link className="close-btn" to="/"></Link>
          <h2>Use 50:50 Lifeline</h2>
          <p className='mb-24 mt-8'>
            The 50-50 will be paused for 30 seconds to allow more time to answer
            the question.
          </p>
        </div>
        <div className="free-coins-btns">
          <Link className="btn shine" to="/">
            Use for Free
          </Link>
          <span>OR</span>
          <Link className="btn pulse btn-secondary" to="/">
            Use For 20{" "}
            <img src="/img/coin-icon.png" className="ml-8" width="18" alt="coin" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LifelinePage;
