import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import AreWeWorking from "./components/AreWeWorking";

const App = () => {
  // Smooth scrolling with Lenis
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

  // Define routes using Root layout
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true, // default route for "/"
          element: <Home />,
        },
        {
          path: "we",
          element: <AreWeWorking />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
