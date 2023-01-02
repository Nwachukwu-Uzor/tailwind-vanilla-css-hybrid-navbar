import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components";

const Home = lazy(() =>
  import("./pages/").then((module) => ({ default: module.Home }))
);

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
