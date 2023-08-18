import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { PharmacyMap } from "../pages/PharmacyMap"

function PublicRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/map" element={<PharmacyMap />} />
      </Routes>
    )
  }

export { PublicRoutes }