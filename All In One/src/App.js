import "./styles.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form/Form";
import Clock from "./Components/Clock/Clock";
import Weather from "./Components/Weather/Weather";
import Calculator from "./Components/Calculator/Calculator";
import MusicPlayer from "./Components/MusicPlayer/MusicPlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Form" element={<Form />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Clock" element={<Clock />} />
          <Route path="/MusicPlayer" element={<MusicPlayer />} />
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

