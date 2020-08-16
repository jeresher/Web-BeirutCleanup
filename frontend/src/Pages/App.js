import React from 'react';
import NavBar from "../Components/NavBar.js"
import Create from "./Create";
import Home from "./Home";
import "@reach/combobox/styles.css";
import '../Style/App.css'; 

function App() {

  const [ createPage, loadCreatePage ] = React.useState(false);

  return (
    <div className="main-container">
      {/* Navigation Bar. */}
      < NavBar createPage={createPage} loadCreatePage={loadCreatePage}/>
      {/* Main Content. */}
      {createPage ? <Create loadCreatePage={loadCreatePage} /> : <Home />}
    </div>
  );
}

export default App;
