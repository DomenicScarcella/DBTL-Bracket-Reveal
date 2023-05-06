import { BracketModular } from "./Bracket/BracketModular";
import "./App.css";

export function App() {
  return (
    <div>
      <div className="header">
        <h1 style={{ color: "#00008f" }}>#DontBuryTheLead</h1>
        <h1 style={{ color: "#8f0000" }}>RECAP:</h1>
      </div>
      <div className="modular">
        <BracketModular />
      </div>
      <div className="footer">
        <h1>WWE Backlash - May 6, 2023</h1>
      </div>
    </div>
  )
}
