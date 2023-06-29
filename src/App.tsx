import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatComponent from './components/ChatComponent';
import ItineraryComponent from './components/ItineraryComponent';
import TourismPage from './components/TourismPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/chat" element={<ChatComponent />} />
          <Route path="/itinerary" element={<ItineraryComponent />} />
          <Route path="/*" element={<TourismPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
