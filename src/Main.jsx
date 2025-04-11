import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextAPI from "./context/ContextAPI";

const Content = () => {
  return (
    <>
      <ContextAPI>
        <App />
      </ContextAPI>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Content />);
