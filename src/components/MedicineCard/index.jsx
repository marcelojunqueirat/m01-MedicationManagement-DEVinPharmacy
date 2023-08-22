import { Card, CardContent, Button } from "@mui/material"
import "./style.css"

function MedicineCard({ medicine }) {
  return (
    <>
      <section className="medicine-card">
        <Card
          sx={{
            backgroundColor: 'var(--secondary-bg-color)',
            borderRadius: '35px'
          }}
        >
          <CardContent
            sx={{
              padding: '2em'
            }}
          >
            <img src={medicine.img} alt={`Foto do remédio ${medicine.medicamento}`} width={200} />
            <div id="preco-card">
              <p>R$ {Number(medicine.preco).toFixed(2).replace('.', ',')}<span>/un</span></p>
            </div>
            <div id="medicamento-card">
              <p>{medicine.medicamento}</p>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textAlign: 'center' }}
            >Detalhes</Button>
          </CardContent>
        </Card>
      </section>
    </>
  )
}

export { MedicineCard }