import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { PlaneSimulator } from "./pages/PlaneSimulator";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/plane-simulator" element={<PlaneSimulator />} />
      </Routes>
      <Footer />
    </>
  );
}
