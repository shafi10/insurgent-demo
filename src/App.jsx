import { Dashboard } from "./components/dashboard/dashboard";
import { Sidebar } from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="app__container">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
