export const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count > 0 ? state.count - action.payload : state.count,
      };
    default:
      return state;
  }
};
