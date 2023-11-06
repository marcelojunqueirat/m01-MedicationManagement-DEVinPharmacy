import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Card, CardContent, Button, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import { MedicineCard } from "../../components/MedicineCard"
import { useApp } from "../../hooks/useApp"
import { useMemo, useState } from "react"
import "./style.css"

function MedicineList() {
  const { listMedicines } = useApp()
  const [ busca, setBusca ] = useState()

  const listMedicinesFilter = useMemo(() => {
    return (busca == undefined || busca == '') ? listMedicines :  
      listMedicines.filter((medicine) => medicine.medicamento.toLowerCase().includes(busca.toLowerCase()))
  }, [busca])

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
              <TextField
                  sx={{ width: '97%' }}
                  color="success"
                  margin="normal"
                  label="Buscar Medicamento"
                  id="busca"
                  name="busca"
                  type="text"
                  value={busca || ''}
                  onChange={(event) => setBusca(event.target.value)}
                />
            </div>

            {listMedicinesFilter?.length > 0 ?
              <div id="medicines-list">
                {
                  listMedicinesFilter.map((medicine) => (
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