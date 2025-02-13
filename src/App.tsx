import "./App.css";
import Final from "./pages/final/final";
import Four from "./pages/four/four";
import Main from "./pages/main/main";
import Second from "./pages/second/second";
import Therd from "./pages/therd/therd";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Main />
      <Second />
      <Therd />
      <Four />
      <Final />
    </>
  );
}

export default App;
