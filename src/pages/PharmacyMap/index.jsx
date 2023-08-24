import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Map } from "../../components/Map"
import { useApp } from "../../hooks/useApp"

function PharmacyMap() {
  const { listPharmacies } = useApp()

  return (
    <>
      <Header />
      <Map pharmacies={listPharmacies} />
      <Footer />
    </>
  )
}

export { PharmacyMap }