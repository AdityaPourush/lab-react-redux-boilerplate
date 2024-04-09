import React from "react";
import { createStore } from "redux";
import { reducer } from "./Reducer";
import { incrementLike, decrementLike } from "./Actions";
import { useDispatch, useSelector } from "react-redux";

const store = createStore(reducer);

const LikeCounter = () => {
  const dispatch = useDispatch();

  let counter = useSelector((prevValue) => {
    return prevValue.count;
  });

  return (
    <div className="counter-container">
      <h2>{counter}</h2>
      <div className="button-div">
        <button onClick={() => dispatch(incrementLike())}>Like</button>
        <button onClickCapture={() => dispatch(decrementLike())}>
          Unlike
        </button>
      </div>
    </div>
  );
};

export default LikeCounter;
export { store };
