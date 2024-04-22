import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AppLayout from "./AppLayout.tsx";
import Doctors from "./pages/Doctors.tsx";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
