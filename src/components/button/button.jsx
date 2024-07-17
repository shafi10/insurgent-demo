/* eslint-disable react/prop-types */
import "./button.css";

export function Button({ title, imgURL }) {
  return (
    <div className="button-area">
      <button className="button btn--primary">
        <img src={imgURL} alt="icon" className="button-icon" /> {title}
      </button>
    </div>
  );
}
