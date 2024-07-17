import { Header } from "../header/header";
import "./dashboard.css";

export function Dashboard() {
  return (
    <div className="app__dashboard_content">
      <Header />
      <div className="dashboard_container">list of table</div>
    </div>
  );
}
