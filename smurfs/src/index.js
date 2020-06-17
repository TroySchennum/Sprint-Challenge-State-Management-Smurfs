import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware} from "redux";
import { Provider, connect, } from "react-redux";
import rootReducer from "./reducers"
import SmurfList from "./components/SmurfList"
import thunk from "redux-thunk"


const store = createStore(rootReducer, applyMiddleware(thunk))
console.log(store.getState())

const rootElement = document.getElementById("root");
ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>
  ,
  rootElement
);

// ReactDOM.render(<App />, document.getElementById("root"));