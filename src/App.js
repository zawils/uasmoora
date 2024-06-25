import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PEMBOBOTAN from "./pages/PEMBOBOTAN";
import DSSMOORA from "./pages/DSSMOORA";
import Rank from "./pages/Rank";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dss-moora":
        title = "";
        metaDescription = "";
        break;
      case "/rank":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PEMBOBOTAN />} />
      <Route path="/dss-moora" element={<DSSMOORA />} />
      <Route path="/rank" element={<Rank />} />
    </Routes>
  );
}
export default App;
