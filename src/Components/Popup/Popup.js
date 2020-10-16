import React, { useState, useContext} from "react";
import "./Popup.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { v4 as uuidv4 } from "uuid";
import {ThemeContext} from "../../App";
const Popup = (props) => {
  let [state, setState] = useState({
    erroes: [
      {
        name: "Test Node",
        id: uuidv4(),
        message: "value cant be null",
        selected: false,
      },
      {
        name: "js",
        id: uuidv4(),
        message: "value cant be null value cant be nullvalue cant be null",
        selected: false,
      },
      {
        name: "Test Node",
        id: uuidv4(),
        message: "value cant be nullvalue cant be nullvalue cant be null",
        selected: false,
      },
      {
        name: "Node",
        id: uuidv4(),
        message: "value cant be nullvalue cant be nullvalue cant be null",
        selected: false,
      },{
        name: "js",
        id: uuidv4(),
        message: "value cant be null value cant be nullvalue cant be null",
        selected: false,
      },
      {
        name: "Test Node",
        id: uuidv4(),
        message: "value cant be nullvalue cant be nullvalue cant be null",
        selected: false,
      }
    ],
  });

  const theme = useContext(ThemeContext);

  // takes id as perameter and searches in list of objects and 
  // returns the index of object that contains the id
  const customFindIndex = (per) => {
    console.log(per, "find index ids start");

    for (let i = 0; i < state.erroes.length; i++) {
      if (state.erroes[i].id === per) {
        return i;
      }
    }
  };

// function runs on clicking on checkbox and changes the  bool state is selected
  const errorSelected = (id) => {
    let objIndex = customFindIndex(id);
    let temp = [...state.erroes];
    temp[objIndex].selected = !temp[objIndex].selected;
    setState({ erroes: temp });
  };
// allerts all the id's with selected sate as true 
  const showIds = () => {
    alert(state.erroes
      .map((per) => {
        if (per.selected) {
          return per.id;
        }
      })
      .join(", "))
  };

  return (
    <div className="Popup-background">
      {/* <p>"theme"{console.log(theme)}</p> */}
        <div className="popup" style = {{backgroundColor:theme.background, color:theme.foreground}}>
        <p className="header">Validations</p>
        <div className="popup-inner-box">
          {state.erroes.map((err) => {
            return (
              <ErrorMessage
                {...err}
                key={err.id}
                errorSelected={errorSelected}
              />
            );
          })}
        </div>
        <button className="btn btnclose" onClick={props.toglePopup}>
          Close
        </button>
        <button className="btn btnSubmit" onClick={showIds}>
          submit
        </button>
      </div>
    </div>
  );
};

export default Popup;
