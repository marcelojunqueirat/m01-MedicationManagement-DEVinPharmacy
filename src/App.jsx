import { BrowserRouter } from "react-router-dom"
import { RoutesApp } from "./routes"
import { AppContextProvider } from "./context/AppContext"
import "leaflet/dist/leaflet.css"
import "./App.css"

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App
