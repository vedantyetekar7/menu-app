import React, { useState } from "react";
import "./style.css";

const UseState = () => {
  const initialData = 5;
  const [myNum, setMyNum] = useState(initialData);

  return (
    <>
      <div className="center_div">
        <div className="heading-hooks">Hooks</div>
        <p>{myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>➕
        </div>
        <div
          className="button2"
          onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>➖
        </div>
      </div>
    </>
  );
};

export default UseState;
