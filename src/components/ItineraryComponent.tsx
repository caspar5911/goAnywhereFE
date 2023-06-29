import React from 'react';
import { useLocation } from 'react-router-dom';

const ItineraryComponent: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  // Retrieve query parameters
  const startDate = query.get('start');
  const endDate = query.get('end');
  const destination = query.get('destination');

  return (
    <div>
      <h1>Itinerary Planner</h1>
      <h2>Destination: {destination}</h2>
      <h3>Start Date: {startDate}</h3>
      <h3>End Date: {endDate}</h3>
      {/* Add your itinerary planning logic and components here */}
    </div>
  );
};

export default ItineraryComponent;
