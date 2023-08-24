import { useApp } from "../../hooks/useApp"
import { mockPharmacies } from "../../data"

function Mock() {
  const { listPharmacies, AddPharmacy } = useApp()

  const isMockTestsTrue = (mockObj, list) => {
    let mock = (import.meta.env.VITE_REACT_APP_MOCK_TEST === 'true') ? mockObj : []
    try {
      if (mock.length > 0 && list.length === 0) {
        mock.map((mockItem) => {
          console.log(mockItem)
          AddPharmacy(mockItem)
        })
        return mock
      }
      return mock
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {isMockTestsTrue(mockPharmacies, listPharmacies)}
    </>
  )
}

export { Mock }