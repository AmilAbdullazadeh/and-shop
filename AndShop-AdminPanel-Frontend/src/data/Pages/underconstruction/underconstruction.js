import Countdown from "react-countdown-now";

const render = ({ days, hours, minutes, seconds }) => {
  // Render a countdown
  return (
    <div className="row">
      <div className="col-md-12 mx-auto">
        <div className="count-down">
          <ul className="countdown">
            <li>
              <span className="number">{days}</span>
              <br />
              <span className="time">Days</span>
            </li>
            <li>
              <span className="number">{hours}</span>
              <br />
              <span className="time">Hours</span>
            </li>
            <li>
              <span className="number">{minutes}</span>
              <br />
              <span className="time">minutes</span>
            </li>
            <li>
              <span className="number">{seconds}</span>
              <br />
              <span className="time">seconds</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export function Underconstruction() {
  return <Countdown date={Date.now() + 3088800000} renderer={render} />;
}
