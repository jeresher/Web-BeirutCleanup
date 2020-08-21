import React from 'react';
import ReactGa from 'react-ga';
import NavBar from "../../Components/Main/NavBar.js"
import Create from "./Create";
import Home from "./Home";
import "@reach/combobox/styles.css";

function Main() {

  const [ createPage, loadCreatePage ] = React.useState(false);

  React.useEffect(() => {
    ReactGa.initialize('UA-175571871-1');
    ReactGa.pageview('/');
  }, []);

  return (
    <div className="main-container">
      {/* Navigation Bar. */}
      < NavBar createPage={createPage} loadCreatePage={loadCreatePage}/>
      {/* Main Content. */}
      {createPage ? <Create loadCreatePage={loadCreatePage} /> : <Home />}
    </div>
  );
}

export default Main;
