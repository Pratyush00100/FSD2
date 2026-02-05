import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Homepage = React.lazy(() => import("./Home"));
const Contactpage = React.lazy(() => import("./Contact"));
const Aboutpage = React.lazy(() => import("./About"));

export default function Singlepageapp() {
  return (
    <BrowserRouter>
      <nav>
        <h2>
          <Link to="/">Home</Link> | <Link to="/contact">Contact</Link> |{" "}
          <Link to="/about">About</Link>
        </h2>
      </nav>

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/about" element={<Aboutpage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
