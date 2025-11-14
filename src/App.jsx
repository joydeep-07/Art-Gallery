import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Root from "./layouts/Root";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import AreWeWorking from "./pages/AreWeWorking";

const App = () => {
  useEffect(() => {
    import("lenis").then((LenisModule) => {
      const Lenis = LenisModule.default;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    });
  }, []);

  return (
    <Router>
      <Routes>
        {/* ROOT LAYOUT */}
        <Route path="/" element={<Root />}>
          {/* CHILD ROUTES */}
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="/are/we/working" element={<AreWeWorking />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
