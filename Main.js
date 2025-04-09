import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import ContextAPI from "./src/context/ContextAPI";
import { getLocalStorage } from "./src/utils/localStorage";

const Content = () => {
  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage();
  // });
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
