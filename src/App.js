import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import FlightDetails from './components/FlightDetails';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Main} />
      <Route exact path='/details' component={FlightDetails} />
    </Router>
  );
}

export default App;
