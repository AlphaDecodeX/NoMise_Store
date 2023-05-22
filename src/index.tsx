import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit"; 
import { Provider } from "react-redux";
import rootReducer from "./services/rootReducer";

const store = configureStore({
    reducer: rootReducer
});

ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    </React.StrictMode>, document.getElementById("root"));

export default {};