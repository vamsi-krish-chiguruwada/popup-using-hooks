import React,{useState} from "react";
import "./App.css";
import Popup from "./Components/Popup/Popup";


export const ThemeContext = React.createContext();
export const ErrorContext = React.createContext();


const App =()=> {

  let [showPopup,setShowPopup] = useState(false)

  let [theme,setTheme] = useState({
    foreground: '#000000',
    background: "#fffff",
  });
  let [errorTheme,setErrorTheme] = useState({
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
  },custom1:{
    background: "rgb(87 107 89)",
    foreground: "rgb(6 3 3)"
  },custom2:{
    background: "rgb(43 90 121)",
    foreground: "rgb(97 212 108)"
  }}

  // used to change bool state "showPopup" to display/hide the popup message
  const toglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleDropdownChanges = (e)=>{
    setTheme(themes[e.target.value]);
  }
  const handleErrorDropdown = (e)=>{
    setErrorTheme(themes[e.target.value]);

  }
    return (
      <div className="App">
        <div className = "AppDiv">
        <button 
          onClick={toglePopup}
        >
          Show Popup
        </button>

      <div className = "dropdown">
        <label htmlFor="theme">Choose popup theme:</label>

        <select onChange = {(e)=>handleDropdownChanges(e)} name="theme" id="theme">
        <option value="default">default</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="custom1">custom1</option>
          <option value="custom2">custom2</option>

        </select>
      </div>

      <div className = "dropdown">
        <label htmlFor="theme">Choose error theme:</label>

        <select onChange = {(e)=>handleErrorDropdown(e)} name="theme" >
        <option value="default">default</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="custom1">custom1</option>
          <option value="custom2">custom2</option>
        </select>
      </div>
      </div>

        {showPopup ?
        <ThemeContext.Provider value = {theme}>
          <ErrorContext.Provider value = {errorTheme}>
         <Popup toglePopup = {toglePopup} />
         </ErrorContext.Provider>
         </ThemeContext.Provider>
          : null}
      </div>
    );
  
}

export default App;
