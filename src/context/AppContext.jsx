import { createContext, useState } from "react"

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [userData, setUserData] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {})

  return (
    <AppContext.Provider
      value={
        {
          userData,
          setUserData
        }
      }
    >
      {children}
    </AppContext.Provider>
  )
}