import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import pets from "./pets/store";
import Pets from "./pets/containers/pets/Pets";

const App = () => {
  const store = createStore(combineReducers({ pets }));

  return (
    <Provider store={store}>
      <Pets />
    </Provider>
  );
};

export default App;
