import React, { useState } from "react";
import "./Popup.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { v4 as uuidv4 } from "uuid";

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

  const customFindIndex = (per) => {
    console.log(per, "find index ids start");

    for (let i = 0; i < state.erroes.length; i++) {
      if (state.erroes[i].id === per) {
        return i;
      }
    }
  };
  const errorSelected = (id) => {
    console.log(id, "updated ids start");
    let objIndex = customFindIndex(id);
    console.log(objIndex, "updated ids index");

    let temp = [...state.erroes];
    temp[objIndex].selected = !temp[objIndex].selected;
    setState({ erroes: temp });
  };

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
      <div className="popup">
        <p className="header">Validations</p>
        <div className="popup-inner-box">
          {state.erroes.map((err) => {
            return (
              <ErrorMessage
                {...err}
                key={err.id}
                errorSelected={errorSelected}
                // bgColor={bgColor}
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
