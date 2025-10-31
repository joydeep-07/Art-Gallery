import React, { useEffect } from "react";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

const App = () => {
  useEffect(() => {
    import("lenis").then((LenisModule) => {
      const Lenis = LenisModule.default;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
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

      // Cleanup function
      return () => {
        lenis.destroy();
      };
    });
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
