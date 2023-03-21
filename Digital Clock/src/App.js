import "./styles.css";
import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // console.log(time);
  return (
    <div className="App">
      <h1>Digital Clock</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default App;
