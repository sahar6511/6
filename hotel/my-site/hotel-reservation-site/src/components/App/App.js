import React from "react";
import Routing from "../Routing/Routing";
import { Provider } from "react-redux";
import store from "../../components/redux/store"

const App = () => {
  return (
    <Provider store={store}>

    <div className="main-page">
      <Routing />
    </div>
    </Provider>
  );
};

export default App;
