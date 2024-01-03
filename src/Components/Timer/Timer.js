import React from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';



const Timer = ({ expiryTimestamp ,rightAnswer, id}) => {
  const navigate = useNavigate();
  const {
    seconds,
    // minutes,
    // hours,
    // days,
    isRunning,
    // start,
    // pause,
    // resume,
    // restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      navigate(`/results/${id}` ,{rightAnswer} );
    },
  });
  return (
    <div>
      <div className='timer_number'>
        <span>{seconds}</span>
      </div>
      <p className='timer_title'>{isRunning ? 'Sec left' : ''}</p>
      {/* <button onClick={start}>Start</button> */}
      {/* <button onClick={pause}>Pause</button> */}
      {/* <button onClick={resume}>Resume</button> */}
      {/* <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 20);
          restart(time);
        }}
      >
        Restart
      </button> */}
    </div>
  );
};

export default Timer;
