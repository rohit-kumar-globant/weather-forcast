import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Weather from './components/Weather/Weather';
import WeatherDetails from './components/Weather/WeatherDetails';

test('renders the header component', () => {
  render(<App />);
  // expect(screen.getByRole('header')).toBeInTheDocument();
});

// test('renders the Weather component for the / route', () => {
//   render(
//     <Router>
//       <Routes>
//         <Route path="/" element={<Weather />} />
//       </Routes>
//     </Router>
//   );

//   expect(screen.getByText(/Search city:/i)).toBeInTheDocument();
// });

// test('renders the WeatherDetails component for the /weather-details/:item route', () => {
//   const item = 'London';
//   render(
//     <Router>
//       <Routes>
//         <Route path="/weather-details/:item" element={<WeatherDetails />} />
//       </Routes>
//     </Router>
//   );

//   expect(screen.getByText(`Details for ${item}`)).toBeInTheDocument();
// });
