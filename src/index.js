import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./Context";
import App from "./App";

ReactDOM.render(
    <ContextProvider>
        <Router>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Router>
    </ContextProvider>,
    document.getElementById("root")
);
