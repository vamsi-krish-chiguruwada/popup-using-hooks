import React,{useState} from "react";
import "./App.css";
import Popup from "./Components/Popup/Popup";
// import uuid from "uuid";
// import { useState } from "react";
const App =()=> {
  // state = {
  //   showPopup: true
  // };
  let [showPopup,setShowPopup] = useState(true)
  const toglePopup = () => {
    setShowPopup(!showPopup);
    // this.setState({ showPopup: !this.state.showPopup });

  };
    return (
      <div className="App">
        <button 
          onClick={toglePopup}
        >
          show
        </button>
        {showPopup ? <Popup toglePopup = {toglePopup} /> : null}
      </div>
    );
  
}

export default App;
