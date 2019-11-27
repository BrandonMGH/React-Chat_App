import React from 'react';

import Chat from './Chat.js'
import Join from './Join.js';

import { BrowserRouter as Router, Route } from "react-router-dom";
import GoogleFontLoader from 'react-google-font-loader';


const App = () => {
  <GoogleFontLoader
  fonts={[
    {
      font: 'Roboto',
      weights: [400, '400i'],
    },
    {
      font: 'Roboto Mono',
      weights: [400, 700],
    },
  ]}
  subsets={['cyrillic-ext', 'greek']}
/>
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
