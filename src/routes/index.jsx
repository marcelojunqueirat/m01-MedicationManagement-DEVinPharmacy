import { PublicRoutes } from "./publicRoutes"
import { PrivateRoutes } from "./privateRoutes"
import { useApp } from "../hooks/useApp"

function RoutesApp() {
  const { userData } = useApp()

  if (userData?.email) {
    return (
      <PrivateRoutes />
    )
  }
  return (
    <PublicRoutes />
  )
}

export { RoutesApp }
