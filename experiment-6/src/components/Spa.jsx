import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const FormSection = lazy(() => import("./form"));
const Contact = lazy(() => import("./Contact"));

export default function SinglePageApp() {
  return (
    <BrowserRouter>
      <nav>
        <h2>
          <Link to="/">Home</Link> | <Link to="/forms">Forms (E6)</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </h2>
      </nav>

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<FormSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
