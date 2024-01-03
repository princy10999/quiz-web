import React from 'react';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className='container'>
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

      <section className='queAnsBox'>
        <div className='queHeader'>
          <h1>Quick Start!</h1>
          <p>Just answer 2 questions and win 200 coins.</p>
          <div className='queNumbers'>
            {' '}
            Question &nbsp;
            <span></span> 1 / <span> 2 </span>
          </div>
        </div>
        <div className='queOptions'>
          <h3>Who wrote the book The Algebra of Infinite Justice?</h3>
          <ul>
            <li id='1'>
              <Link  className=' ' to='/start'>
                Virama Seth
              </Link>
            </li>
            <li id='2'>
              <Link  className=' ' to='/start'>
                Rohinton Mistry
              </Link>
            </li>
            <li id='3'>
              <Link  className=' ' to='/start'>
                Anurag Mathur
              </Link>
            </li>
            <li id='4'>
              <Link  className=' ' to='/start'>
                Arundhati Roy
              </Link>
            </li>
          </ul>
        </div>
        <div className='funFact'>
          <h4>#Fun Fact</h4>
          <p>
            Brendon McCullum, New Zealand batsman, hit the first boundary
            against Zaheer Khan in IPL.
          </p>
        </div>
      </section>
      <div className='signBtnGrp'>
        <Link  title='Sign up' to='/login'>
          Sign up
        </Link>{' '}
        OR{' '}
        <Link  title='Sign In' to='/login'>
          Sign In
        </Link>
      </div>
      <section className='points'>
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

export default Start;
