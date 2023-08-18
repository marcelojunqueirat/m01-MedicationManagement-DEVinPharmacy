import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export { PublicRoutes }