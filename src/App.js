import React from "react";
import Header from "./components/header";
import Main from "./components/main";


function App() {
  return (
    <div className="todo">
      <div className= "header">
       <Header/>
      </div>
      <div className="main">
        <Main/>
      </div>
      <br/>
      <div className="footer">
        <p>Tomás Bongarrá</p>
      </div>
    </div>
  );
}

export default App;
