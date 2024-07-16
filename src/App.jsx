import { Sidebar } from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="app__container">
      <Sidebar />
      <div className="app__dashboard_content">main content</div>
    </div>
  );
}

export default App;
