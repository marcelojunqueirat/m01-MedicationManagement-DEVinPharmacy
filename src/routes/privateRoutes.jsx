import { Route, Routes, Navigate } from "react-router-dom";
import { PharmacyMap } from "../pages/PharmacyMap";

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/map" />} />
      <Route path="/map" element={<PharmacyMap />} />
    </Routes>
  )
}

export { PrivateRoutes }