import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/user/login';
import Register from './components/user/register';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
