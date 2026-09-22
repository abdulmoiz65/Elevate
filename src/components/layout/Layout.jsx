import { Outlet, useLocation } from "react-router-dom";
import ChatWidget from "../ui/ChatWidget";
import Footer from "./Footer";
import Header from "./Header";
import ScrollManager from "./ScrollManager";

/** App shell: skip link, header, routed page, footer, chat assistant. */
export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollManager />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>

      <Header />

      {/* Keyed on the path so React remounts the wrapper on every route
          change, restarting the enter animation. */}
      <main id="main" key={pathname} className="page-enter flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Outside <main>, so it is not keyed on the path and an open
          conversation survives navigating between pages. */}
      <ChatWidget />
    </div>
  );
}
