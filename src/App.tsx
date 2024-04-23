import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AppLayout from "./AppLayout.tsx";
import Doctors from "./pages/Doctors.tsx";
import DryEyeDisease from "./pages/DryEyeDisease.tsx";
import AtHomeTreatments from "./pages/AtHomeTreatments.tsx";
import InOfficeTreatments from "./pages/InOfficeTreatments.tsx";
import Contact from "./pages/Contact.tsx";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/dry-eye-disease" element={<DryEyeDisease />} />
            <Route path="/at-home-treatments" element={<AtHomeTreatments />} />
            <Route
              path="/in-office-treatments"
              element={<InOfficeTreatments />}
            />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
