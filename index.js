import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("root")); // Create a root

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);









// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
