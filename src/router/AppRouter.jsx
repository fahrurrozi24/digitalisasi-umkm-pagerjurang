import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Umkm from "../pages/Umkm";
import Tourism from "../pages/Tourism";
import News from "../pages/News";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/umkm" element={<Umkm />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;