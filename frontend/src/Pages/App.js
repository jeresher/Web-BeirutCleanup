import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from "./Create";
import Home from "./Home";
import '../Style/App.css'; 

function App() {
  return (
    <Router>
      
      <Switch>

        <Route exact path='/' component={Home} />
        <Route exact path='/create' component={Create} />

      </Switch>

    </Router>
  );
}

export default App;
