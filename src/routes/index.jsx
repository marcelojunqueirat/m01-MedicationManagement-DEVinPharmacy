import { PublicRoutes } from "./publicRoutes"
import { PrivateRoutes } from "./privateRoutes"
import { useApp } from "../hooks/useApp"

function RoutesApp() {
  const { userData } = useApp()

  console.log(userData)
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
