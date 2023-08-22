import { createContext, useState } from "react"

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [userData, setUserData] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {})
  const [listPharmacies, setListPharmacies] = useState(JSON.parse(localStorage.getItem("listPharmacies")) || [])

  const AddPharmacy = (form) => {
    try {
      const newPharmacy = {
        id: listPharmacies.length + 1,
        ...form
      }
      const updatedListPharmacies = [...listPharmacies, newPharmacy]
      setListPharmacies(updatedListPharmacies)
      console.log(updatedListPharmacies)
      localStorage.setItem("listPharmacies", JSON.stringify(updatedListPharmacies))
    } catch (error) {
      console.log("Erro ao cadastrar Farmácia", error)
    }
  }

  return (
    <AppContext.Provider
      value={
        {
          userData,
          setUserData,
          AddPharmacy
        }
      }
    >
      {children}
    </AppContext.Provider>
  )
}