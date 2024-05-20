import { Outlet } from "react-router-dom";
import Footer from "./ui/Footer.tsx";
import Nav from "./ui/Nav.tsx";
import styles from "./AppLayout.module.scss";

function AppLayout() {
  return (
    <div className={styles.container}>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
