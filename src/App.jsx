import { useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  //state
  const [age, setAge] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  let thisYear = new Date().getFullYear();
  let bornYear = 1998;

  const calculateAge = () => {
    const age = thisYear - bornYear;
    setAge(age);
  }

  const actionSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <div>
      {!showSidebar && (
        <button
          onClick={actionSidebar}
          style={{ transform: "rotate(90deg)", marginBottom: "40px" }}>
          |||
        </button>
      )}

      {showSidebar && <Sidebar actionSidebar={actionSidebar} />}

      <br /><br />

      <h1>{age}</h1>
      <button onClick={calculateAge}>calculate my age</button>

    </div>
  )
}

export default App;