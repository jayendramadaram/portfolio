import React, { useRef, useEffect } from "react";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import LayoutDefault from "./layouts/LayoutDefault";
import Home from "./views/Home";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const childRef = useRef();

  useEffect(() => {
    document.body.classList.add("is-loaded");
    childRef.current.init();
  });

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <div>
          <AppRoute component={Home} layout={LayoutDefault} />
        </div>
      )}
    />
  );
};

export default App;
