import { useContext } from "react"
import { AppContext } from "../context/AppContext"

function useApp() {
  const context = useContext(AppContext)

  return context
}

export { useApp }