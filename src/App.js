import React from "react";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import pets from "./pets/store";
import Pets from "./pets/containers/pets/Pets";

const App = () => {
  const store = createStore(combineReducers({ pets }), applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <Pets />
    </Provider>
  );
};

export default App;
