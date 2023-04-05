import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Header } from './components/Header/Header';
import Weather from './components/Weather/Weather';
import WeatherDetails from "./components/Weather/WeatherDetails";
function App() {


  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Weather />} />
          <Route exact path="/weather-details/:item" element={<WeatherDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
