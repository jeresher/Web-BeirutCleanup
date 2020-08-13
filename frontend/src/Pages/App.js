import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "../Components/NavBar.js"
import Create from "./Create";
import Home from "./Home";
import '../Style/App.css'; 

function App() {

  const [ createPage, loadCreatePage ] = React.useState(false);

  return (
    <div className="main-container">
      < NavBar loadCreatePage={loadCreatePage}/>
      { createPage ? <Create /> : <Home />}
    </div>
  );
}

export default App;
