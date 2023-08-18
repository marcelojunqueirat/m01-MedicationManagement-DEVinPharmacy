import { Route, Routes } from "react-router-dom";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <h1>Login</h1>} />
    </Routes>
  )
}

export { PublicRoutes }