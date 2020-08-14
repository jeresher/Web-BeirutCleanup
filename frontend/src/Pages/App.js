import React from 'react';
import NavBar from "../Components/NavBar.js"
import Create from "./Create";
import Home from "./Home";
import '../Style/App.css'; 

function App() {

  const [ createPage, loadCreatePage ] = React.useState(false);

  return (
    <div className="main-container">
      < NavBar createPage={createPage} loadCreatePage={loadCreatePage}/>

      {createPage ? 
      <Create loadCreatePage={loadCreatePage} /> : 
      <Home />}
    </div>
  );
}

export default App;
