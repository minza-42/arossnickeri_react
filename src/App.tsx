import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-oss" element={<AboutPage />} />
        <Route path="/galleri" element={<GalleryPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
