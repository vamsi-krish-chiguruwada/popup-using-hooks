import React from 'react';
import Onenterincriment from "./Components/Onenterincriment/Onenterincriment";
import Onclickincriment from "./Components/Onclickincriment/Onclickincriment";

import './App.css';
function App() {
  
  return (
    <div className="App">
      <p>HOC Practice</p>

      <Onenterincriment/>
      <Onclickincriment/>
    </div>
  );
}

export default App;
