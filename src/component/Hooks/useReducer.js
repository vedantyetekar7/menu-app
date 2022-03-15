import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "+") {
    state += 1;
  }
  if (state > 0 && action.type === "-") {
    state -= 1;
  }

  return state;
};

const UseReducer = () => {
  const initialData = 5;

  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div className="center_div">
        <div className="heading-hooks">Hooks</div>
        <p>{state}</p>
        <div className="button2" onClick={() => dispatch({ type: "+" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>➕
        </div>
        <div className="button2" onClick={() => dispatch({ type: "-" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>➖
        </div>
      </div>
    </>
  );
};

export default UseReducer;
