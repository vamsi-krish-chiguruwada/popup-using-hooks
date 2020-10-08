import React ,{useState}from "react";
// import logo from './logo.svg';

const Onclickincriment =()=> {

  let [count,setCount] = useState(0);
  const incriment = () => {
    setCount(count + 1 );
  };
    return (
      <div onClick={incriment}>
        <p>HOC Practice</p>
        <h1>{count}</h1>
      </div>
    );
  }

export default Onclickincriment;
