/* eslint-disable react/prop-types */
import "./button.css";

export function Button({ title, imgURL, btnClass }) {
  return (
    <div className="button-area">
      <button className={`button ${btnClass}`}>
        <img src={imgURL} alt="icon" className="button-icon" /> {title}
      </button>
    </div>
  );
}
