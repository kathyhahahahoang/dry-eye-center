import { Outlet } from "react-router-dom";
import NavBar from "./ui/NavBar.tsx";
import Footer from "./ui/Footer.tsx";

function AppLayout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
