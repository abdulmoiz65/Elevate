import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/AboutPage";
import BridgePage from "./pages/BridgePage";
import ContactPage from "./pages/ContactPage";
import EventsPage from "./pages/EventsPage";
import FaqPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProgramsPage from "./pages/ProgramsPage";

/** Route table. Paths here must match `to` values in src/data/navigation.js. */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="bridge" element={<BridgePage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
