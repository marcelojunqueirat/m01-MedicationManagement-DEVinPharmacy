import { createContext, useState } from "react"

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [userData, setUserData] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {})
  const [listPharmacies, setListPharmacies] = useState(JSON.parse(localStorage.getItem("listPharmacies")) || [])
  const [listMedicines, setListMedicines] = useState(JSON.parse(localStorage.getItem("listMedicines")) || [])

  const AddPharmacy = (form) => {
    try {
      const newPharmacy = {
        id: listPharmacies.length + 1,
        ...form
      }
      const updatedListPharmacies = [...listPharmacies, newPharmacy]
      setListPharmacies(updatedListPharmacies)
      localStorage.setItem("listPharmacies", JSON.stringify(updatedListPharmacies))
    } catch (error) {
      console.log("Erro ao cadastrar Farmácia", error)
    }
  }

  const AddMedicine = (form) => {
    try {
      const newMedicine = {
        id: listMedicines.length + 1,
        ...form
      }
      const updatedListMedicines = [...listMedicines, newMedicine]
      setListMedicines(updatedListMedicines)
      console.log(updatedListMedicines)
      localStorage.setItem("listMedicines", JSON.stringify(updatedListMedicines))
    } catch (error) {
      console.log("Erro ao cadastrar Medicamento", error)
    }
  }

  return (
    <AppContext.Provider
      value={
        {
          userData,
          setUserData,
          AddPharmacy,
          AddMedicine
        }
      }
    >
      {children}
    </AppContext.Provider>
  )
}