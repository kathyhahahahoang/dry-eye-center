import { Outlet } from "react-router-dom";

import Footer from "./ui/Footer.tsx";
import Nav from "./ui/Nav.tsx";

function AppLayout() {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
