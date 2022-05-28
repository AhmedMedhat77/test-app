import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import globalRoutes from "../Routes/globalRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {globalRoutes.map((item) => {
          return <Route {...item} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
