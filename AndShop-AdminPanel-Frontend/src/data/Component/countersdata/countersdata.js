import React, { useState, useRef, useEffect } from "react";
import TimeFormat from "hh-mm-ss";
import Countdown from 'react-countdown-now';

//timer 1 minute counter
export function Middle() {
  const intervalRef = useRef(null);

  const [timer, setTimer] = useState("00:00:00");
  useEffect(() => {
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 60);

    return {
      total,
      hours,
      minutes,
      seconds,
    };
  }
  function startTimer(deadline) {
    let { total, hours, minutes, seconds } = getTimeRemaining(deadline);
    if (total >= 0) {
      setTimer(
          (hours  ? hours : "0" + hours) +
          ":" +
          (minutes  ? minutes : "0" + minutes) +
          ":" +
          (seconds ? seconds : "0" + seconds)
      );
    } else {
      clearInterval(intervalRef.current);
    }
  }

  function clearTimer(endtime) {
    setTimer("00:00:60");
    if (intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    intervalRef.current = id;
  }
  function getDeadlineTime() {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 60);
    return deadline;
  }
  
    clearTimer(getDeadlineTime());
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }; 
  }, []);
  return <>{timer}</>;
}


// Time Counting From 0 to 3 min
// const RESET_INTERVAL_S = 3; // 300s = 5m * 60s/m
const formatTime = (time) =>
  ` ${String(Math.floor(time / 60)).padStart(2, "0")} : ${String(
    time % 60
  ).padStart(2, "0")}`;

const Timer = ({ time }) => {
  // const  RESET_INTERVAL_S = (time % RESET_INTERVAL_S);

  return (
    <>
      <div> 00 Days 00 :{formatTime(time)}</div>
    </>
  );
};

const IntervalTimerFunctional = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return <Timer time={time} />;
};

export function Uptimer() {
  return <IntervalTimerFunctional />;
}

//Time Counting From 60 to 20

export const Timers = ({ min }) => {
  let mainTime;
  const secondsLeft = () => {
    const left = Number(min) * 60;
    return left;
  };

  const [seconds, setSeconds] = useState(secondsLeft());
  useEffect(() => {
    startTime();
    return () => {
      stopTimer();
    };
  });

  const startTime = () => {
    if (seconds && seconds > 20) {
      mainTime = setInterval(tick, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(mainTime);
  };

  const tick = () => {
    setSeconds((seconds) => {
      const updatedSeconds = seconds - 1;
      if (updatedSeconds < 1) {
        stopTimer();
      }
      return updatedSeconds;
    });
  };

  const display = TimeFormat.fromS(seconds, "hh:mm:ss");
  const [h, m, s] = display.split(":");
  return (
    <>
      {h} : {m} : {s}
    </>
  );
};



// // Random component
const AfterComplete = () => <span>You are good to go!</span>;
  
// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;
  } else {
    // Render a countdown
    return (
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="count-down row daycounter">
            <div className="col-xl-3 col-md-6 countdown  mb-6 mb-xl-0">
              <span className="days text-primary me-1">{days}</span>
              <span className="text-dark">Days</span>
            </div>
            <div className="col-xl-3 col-md-6 countdown mb-6 mb-xl-0">
              <span className="hours text-primary me-3 ">{hours}</span>
              
              <span className="text-dark me-2">Hrs</span>
            </div>
            <div className="col-xl-3 col-md-6 countdown  mb-6 mb-xl-0">
              <span className="minutes text-primary me-1">{minutes}</span>
              
              <span className="text-dark">Mins</span>
            </div>
            <div className="col-xl-3 col-md-6 countdown ">
              <span className="seconds text-primary me-1">{seconds}</span>
              
              <span className="text-dark">Secs</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export function DayCounter() {
return(

  <Countdown date={Date.now() + 3088800000} renderer={rendering} />
)

};

  // Random component
  const AfterCompletion = () => <span>You are good to go!</span>;
  
  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <AfterCompletion />;
    } else {
      // Render a countdown
      return (
        <span className="h3 text-white">
        <span>{days}Days {hours} Hours {minutes} Minutes {seconds} Seconds</span>
        </span>
      );
    }
  };
  export function TimeCountingdaysLimit() {
return(
    <Countdown date={Date.now() + 259200000} renderer={renderer} />
  )
};

// Renderer callback with condition
const render = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;
  } else {
    // Render a countdown
    return (
  <div className="row">
      <div className="col-md-8 mx-auto">
        <div className="count-down row ">
          <div className="col-lg-3 col-md-6 countdown mb-6 mb-lg-0">
            <span className="days text-dark me-1">{days}</span>
            <span className="text-dark">Days</span>
          </div>
          <div className="col-lg-3 col-md-6 countdown mb-6 mb-lg-0">
            <span className="hours text-dark me-1">{hours}</span>
            <span className="text-dark">Hours</span>
          </div>
          <div className="col-lg-3 col-md-6 countdown  mb-6 mb-lg-0">
            <span className="minutes text-dark  me-1">{minutes}</span>
            <span className="text-dark">Minutes</span>
          </div>
          <div className="col-lg-3 col-md-6 countdown ">
            <span className="seconds text-dark  me-1">{seconds}</span>
            <span className="text-dark">Seconds</span>
          </div>
        </div>
      </div>
    </div>   
    );
  }
};
export function DayCounters() {
return(
  <Countdown date={Date.now() + 3088800000} renderer={render} />
)
};
