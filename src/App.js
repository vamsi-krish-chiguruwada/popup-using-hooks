import React,{useState} from "react";
import "./App.css";
import Popup from "./Components/Popup/Popup";


export const ThemeContext = React.createContext();


const App =()=> {

  let [showPopup,setShowPopup] = useState(false)

  let [theme,setTheme] = useState({
    foreground: '#000000',
    background: "#fffff",
  });

  
  const themes = {default: {
    foreground: '#000000',
    background: "#fffff",
  },light: {
    foreground: '#000000',
    background: '#eeeeee',
  },dark: {
    foreground: '#ffffff',
    background: '#222222',
  }}

  // used to change bool state "showPopup" to display/hide the popup message
  const toglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleDropdownChanges = (e)=>{
    setTheme(themes[e.target.value]);
  }
    return (
      <div className="App">
        <button 
          onClick={toglePopup}
        >
          show
        </button>

      <div className = "dropdown">
        <label htmlFor="theme">Choose a theme:</label>

        <select onChange = {(e)=>handleDropdownChanges(e)} name="theme" id="theme">
        <option value="default">default</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

        {showPopup ?
        <ThemeContext.Provider value = {theme}>
         <Popup toglePopup = {toglePopup} />
         </ThemeContext.Provider>
          : null}
      </div>
    );
  
}

export default App;
