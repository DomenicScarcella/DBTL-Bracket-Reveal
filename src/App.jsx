import { BracketModular } from "./BracketModular.jsx";
import "./App.css";

export function App() {
  return (
    <div style={{ backgroundColor: "#efefef", height: "99vh" }}>
      <div className="header">
        <h1 style={{ color: "#00008f" }}>#DontBuryTheLead</h1>
        <h1 style={{ color: "#8f0000" }}>SPECIAL:</h1>
      </div>
      <BracketModular />
      <div className="footer">
        <h1>Who Would Win a Shoot Fight?</h1>
      </div>
    </div>
  )
}
