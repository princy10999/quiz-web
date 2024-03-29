import React from 'react';

function ContestRules() {
  return (
    <div className='container'>
      <section className='points'>
        <h1>Contest Rules!</h1>
        <ul className='mt-24'>
          <li>
            {' '}
            The winners for each quiz will be declared based on the scores they
            obtain during the participation in the quiz.{' '}
          </li>
          <li>
            {' '}
            There will be a fixed time for declaring the winners of each quiz.{' '}
          </li>
          <li>
            {' '}
            You will have overall 60 seconds to solve as many as questions from
            20 questions in quiz.
          </li>
          <li>
            {' '}
            There will be 4 options given below each question and one will be
            the answer for it out of them.{' '}
          </li>
          <li> Each right answer fetches you 25 points. </li>
          <li> Each wrong answer gives you (-) 10 points.</li>
          <li>
            {' '}
            Do not forget to use thach lifeline once during the each contest.
            Use a given amount of coins from your coin bank or watch an ad for a
            few secs to use the lifeline for free!
          </li>
          <li>
            You would have 4 different le lifelines in case if you are stuck
            during the contest.
          </li>
          <li>
            Remember users can use eifelines to use:
            <ul>
              <li>
                50:50 – On using it, two incorrect answers will be eliminated
                from the screen.{' '}
              </li>
              <li>
                Freezer Time – A pause for the ongoing timer will take place for
                30 seconds while allowing the users get more time to answer the
                question.
              </li>
              <li>
                Audience Poll – You can use this option to choose the right
                answer out of 4 options by using the intelligence of the smart
                audience.
              </li>
              <li>
                Flip Question – A new question will interchange the question
                currently showing on the screen.
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className='advertize'>
        <div className='container'>
          <div className='advert-wrapper gray-box undefined p-8'>
            <span>Sponsored </span>
            <div className='d-flex justify-content-center addvert-code'>
              <div style={{ width: '100%', backgroundColor: 'black' }}>
                <h1>advertise portion</h1>
            
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContestRules;
