import { Outlet } from "react-router-dom";
import NavBar from "../src/ui/NavBar";
import Footer from "../src/ui/Footer";

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
