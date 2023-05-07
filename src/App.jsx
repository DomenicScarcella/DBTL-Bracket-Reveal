// import { useState } from "react";
import { BracketModular } from "./Bracket/BracketModular";
import "./App.css";

export function App() {
  // const [head, setHead] = useState("RECAP");

  // function NavHead() {
  //   return (
  //     <div>
  //       <form>
  //         <input
  //           type="radio"
  //           value="RECAP"
  //           id="RECAP"
  //           onChange={() => {
  //             setHead("RECAP")
  //           }} 
  //         />
  //         <label>Recap</label>
  //         <input
  //           type="radio"
  //           value="PREVIEW"
  //           id="PREVIEW"
  //           onChange={() => {
  //             setHead("PREVIEW")
  //           }} 
  //         />
  //         <label>Preview</label>
  //         <input
  //           type="radio"
  //           value="SPECIAL"
  //           id="SPECIAL"
  //           onChange={() => {
  //             setHead("SPECIAL")
  //           }} 
  //         />
  //         <label>Special</label>
  //       </form>
  //     </div>
  //   )
  // }




  return (
    <div>
      <div className="header">
        <h1>#DontBuryTheLead</h1>
        <h1>SPECIAL:</h1>
      </div>
      <div className="modular">
        <BracketModular />
      </div>
      <div className="footer">
        {/* <h1>WWE SmackDown - May 12, 2023</h1> */}
        <h1>Who Would Win a Real Fight?</h1>
        {/* <div className="navblock">
          <NavHead />

        </div> */}
      </div>
    </div>
  )
}
