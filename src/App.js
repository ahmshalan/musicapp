import "./App.css";
import Sidebar from "./Sidebar";
import Music from "./Music";
import Footer from "./Footer";
function App() {
  return (
    <div className="app">
      <div className="app_row">
        <Sidebar darkTheme={true} />
        <Music darkTheme={true} />
      </div>
        <Footer />
    </div>
  );
}

export default App;
