import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Card, CardContent, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { MedicineCard } from "../../components/MedicineCard"
import { useApp } from "../../hooks/useApp"
import "./style.css"

function MedicineList() {
  const { listMedicines } = useApp()

  return (
    <>
      <Header />
      <section id="card-list-medicine">
        <Card
          sx={{
            borderRadius: '35px',
            backgroundColor: '#FFF'
          }}
        >
          <CardContent>
            <Link to="/add-medicine">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, textAlign: 'center' }}
              >Cadastrar Medicamento</Button>
            </Link>
            <div id="titulo-list-medicamentos">
              <h2>Listagem de Medicamentos</h2>
            </div>
            {listMedicines?.length > 0 ?
              <div id="medicines-list">
                {
                  listMedicines.map((medicine) => (
                    <MedicineCard key={medicine.id} medicine={medicine} />
                  ))
                }
              </div>
              :
              <div id="listagem-vazia">
                <h3>Não há medicamentos cadastrados.</h3>
              </div>
            }
          </CardContent>
        </Card>
      </section>
      <Footer />
    </>
  )
}

export { MedicineList }