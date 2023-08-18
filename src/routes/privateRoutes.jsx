import { Route, Routes } from "react-router-dom";
import { PharmacyMap } from "../pages/PharmacyMap";

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/map" element={<PharmacyMap />} />
    </Routes>
  )
}

export { PrivateRoutes }