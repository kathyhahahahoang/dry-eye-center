import { Outlet } from "react-router-dom";

import Footer from "./ui/Footer.tsx";

function AppLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
