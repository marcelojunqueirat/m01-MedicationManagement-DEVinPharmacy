import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Card, CardContent, Grid, Button } from "@mui/material"
import { Link } from "react-router-dom"
import "./style.css"

function MedicineList() {
  return (
    <>
      <Header />
      <section id="form-list-medicine">
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
            <Grid item xs={12} sm={8} md={5}>
            

            </Grid>
          </CardContent>
        </Card>
      </section>
      <Footer />
    </>
  )
}

export { MedicineList }