import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//** COMPONENTS  **//
import Join from './components/Join.js';
import Chat from './components/Chat.js';

export default function App() {
    return (
      <Router>
          <Route path="/" exact component={Join} />
          <Route path="/chat" component={Chat} />
      </Router>
    )
}
