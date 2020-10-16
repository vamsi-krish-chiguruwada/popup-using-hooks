import React, {useState}from "react";
import "./ErrorMessage.css";

const ErrorMessage = (props) => {
  let [hoverd, setHoverd] = useState(false);

  // alerts the id when open is clicked
  const showAlert = (id) => {
    alert(id);
  };

  return (
    <div className="inputWraper">
      <input
        onClick={() => props.errorSelected(props.id)}
        className="checkbox"
        type="checkbox"
        id={props.id}
      ></input>
      <div
        onMouseEnter={() => setHoverd(true)}
        onMouseLeave={() => setHoverd(false)}
        id={props.hoverid}
        className={hoverd ? "error-message-box hover" : "error-message-box"}
      >
        <div className=" box box-top">
          <div className="icon-holder">
            <span className="material-icons">:)</span>
          </div>
          <div className="id-holder">
            <p className="error-content error-header">{props.name}</p>
            <p className="error-content error-id">{props.id}</p>
          </div>

          {hoverd ?
            <div
              onClick={() => showAlert(props.id)}
              className="Open-holder showOpen"
            >
              <p>Open</p>

            </div>
           :null
          }

        </div>
        <div className="box box-bottom">
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
};
export default ErrorMessage;
