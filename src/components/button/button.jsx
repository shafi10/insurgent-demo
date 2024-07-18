/* eslint-disable react/prop-types */
import "./button.css";

export function Button({
  title,
  imgURL,
  btnClass,
  onSubmit,
  buttonRef,
  disableButton = false,
}) {
  return (
    <div className="button-area">
      <button
        className={`button ${btnClass}`}
        type="submit"
        onClick={onSubmit}
        ref={buttonRef}
        disabled={disableButton}
      >
        <img src={imgURL} alt="icon" className="button-icon" /> {title}
      </button>
    </div>
  );
}
