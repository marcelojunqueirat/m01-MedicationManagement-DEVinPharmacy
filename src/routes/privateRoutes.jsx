import { Route, Routes, Navigate } from "react-router-dom";
import { PharmacyMap } from "../pages/PharmacyMap";
import { PharmacyNew } from "../pages/PharmacyNew";
import { MedicineNew } from "../pages/MedicineNew";

function PrivateRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Navigate replace to="/map" />} />
        <Route path="/map" element={<PharmacyMap />} />
        <Route path="/pharmacy" element={<PharmacyNew />} />
        <Route path="/medicine" element={<MedicineNew />} />
      </Routes>
    )
  }

export { PrivateRoutes }