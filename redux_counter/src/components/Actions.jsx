const incrementLike = () => {
  return {
    type: "INCREMENT",
    payload: 1,
  };
};

const decrementLike = () => {
  return {
    type: "DECREMENT",
    payload: 1,
  };
};

export { incrementLike, decrementLike };
