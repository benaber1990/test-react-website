import logo from "./logo.svg";
import "./App.css";
import TileComp from "./components/TileComp";

function App() {
  return (
    <div>
      <div className="App">
        <TileComp title="Today" />
        <TileComp title="Next" />
        <TileComp title="Tomoz" />
      </div>
      <div className="App">
        <TileComp title="Completed" />
        <TileComp title="Issue" />
        <TileComp title="Assigned" />
      </div>
    </div>
  );
}

export default App;
