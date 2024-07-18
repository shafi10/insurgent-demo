import { Button } from "../button/button";
import buttonIcon from "../../assets/buttonicon.png";
import "./header.css";

export function Header() {
  return (
    <div className="header_container">
      <div className="header_title">Welcome, David Lovejoy.</div>
      <Button
        title="Confirm Selection"
        imgURL={buttonIcon}
        btnClass="btn--primary"
      />
    </div>
  );
}
