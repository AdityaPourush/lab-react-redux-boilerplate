import React from "react";
import { Provider } from "react-redux";
import LikeCounter from "./components/LikeCounter";
import { store } from "./components/LikeCounter";

const App = () => {
  return (
    <Provider store={store}>
      <LikeCounter />
    </Provider>
  );
};

export default App;
