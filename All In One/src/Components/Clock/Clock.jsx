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
    <div className="ClockApp">
      <h1>Digital Clock</h1>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
