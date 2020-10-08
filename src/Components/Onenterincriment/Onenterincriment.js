import React, {useState}from "react";
// import logo from './logo.svg';

const Onenterincriment =()=> {
  // constructor(props){
  //   super(props);
  //   console.log(this,"constructor on enter")
  //   this.state = {
  //     count:0
  //   }

  // }
  let [count,setCount]=useState(0);
  // componentDidMount(){
  //   console.log(this,"comp did mount on enter")
  // }
  // shouldComponentUpdate(){
  //   console.log(this,"should comp update on enter")
  //   return true;
  // }
  // componentDidUpdate(){
  //   console.log(this,"componentDidUpdate on enter")

  // }
  // componentWillUnmount(){
  //   console.log(this,"componentWillUnmount on enter")

  // }
    // state = { count: 0 };
  const incriment = () => {
    setCount(count + 1 );
  };
    return (
     <div onMouseEnter = {incriment}>
        <p>HOC Practice</p>
        <h1>{count}</h1>
      </div> 
    );
  }

export default Onenterincriment;
