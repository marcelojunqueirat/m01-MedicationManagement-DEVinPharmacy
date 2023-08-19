import { useState } from "react"
import { Card, CardContent, Grid, TextField, Button } from "@mui/material"
import { Loading } from "../../components/Loading"
import "./style.css"

function PharmacyForm() {
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault()
    console.log(form)
    setLoading(false)
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <section id="form-farmacia">
        <Card
          sx={{
            borderRadius: '35px',
            backgroundColor: '#FFF'
          }}
        >
          <h2>Cadastro de Farmácia</h2>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid item xs={12} sm={8} md={5}>
                <div id="body-form">
                  <TextField
                    sx={{ width: '97%' }}
                    required
                    color="success"
                    margin="normal"
                    label="Razão social"
                    id="razaoSocial"
                    name="razaoSocial"
                    type="text"
                    autoFocus
                    onChange={(event) => setForm({ ...form, razaoSocial: event.target.value })}
                  />
                  <TextField
                    sx={{ width: '97%' }}
                    required
                    color="success"
                    margin="normal"
                    label="Nome Fantasia"
                    id="nomeFantasia"
                    name="nomeFantasia"
                    type="text"
                    onChange={(event) => setForm({ ...form, nomeFantasia: event.target.value })}
                  />
                  <TextField
                    sx={{ width: '48%' }}
                    required
                    color="success"
                    margin="normal"
                    label="CNPJ"
                    name="cnpj"
                    type="text"
                    id="cnpj"
                    onChange={(event) => setForm({ ...form, cnpj: event.target.value })}
                  />
                  <TextField
                    sx={{ width: '48%' }}
                    required
                    color="success"
                    margin="normal"
                    label="E-mail"
                    id="email"
                    name="email"
                    type="email"
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                  />
                  <TextField
                    sx={{ width: '48%' }}
                    color="success"
                    margin="normal"
                    label="Telefone"
                    id="telefone"
                    name="telefone"
                    type="tel"
                    onChange={(event) => setForm({ ...form, telefone: event.target.value })}
                  />
                  <TextField
                    sx={{ width: '48%' }}
                    required
                    color="success"
                    margin="normal"
                    label="Celular"
                    id="celular"
                    name="celular"
                    type="tel"
                    onChange={(event) => setForm({ ...form, celular: event.target.value })}
                  />
                  <div id="border" />
                  <div style={{ width: '100%', textAlign: 'center' }}>
                    <h3>Endereço</h3>
                  </div>
                  <TextField
                    sx={{ width: '38%' }}
                    required
                    color="success"
                    margin="normal"
                    label="CEP"
                    id="cep"
                    name="cep"
                    type="text"
                    onChange={(event) => setForm({ ...form, cep: event.target.value })}
                  />
                  <TextField
                    sx={{ width: '58%' }}
                    required
                    color="success"
                    margin="normal"
                    label="Logradouro/Endereço"
                    id="logradouro"
                    name="logradouro"
                    type="text"
                    onChange={(event) => setForm({ ...form, logradouro: event.target.value })}
                  />
                  <TextField
                    sx={{ width: '38%' }}
                    required
                    color="success"
                    margin="normal"
                    label="Número"
                    id="numero"
                    name="numero"
                    type="number"
                    onChange={(event) => setForm({ ...form, numero: event.target.value })}
                  />
                  <TextField
                    sx={{ width: '58%' }}
                    required
                    color="success"
                    margin="normal"
                    label="Bairro"
                    id="bairro"
                    name="bairro"
                    type="text"
                    onChange={(event) => setForm({ ...form, bairro: event.target.value })}
                  />
                  <TextField
                    sx={{ width: '97%' }}
                    color="success"
                    margin="normal"
                    label="Complemento"
                    id="complemento"
                    name="complemento"
                    type="text"
                    onChange={(event) => setForm({ ...form, complemento: event.target.value })}
                  />
                  <TextField
                    sx={{ width: '58%' }}
                    required
                    color="success"
                    margin="normal"
                    label="Cidade "
                    id="cidade"
                    name="cidade"
                    type="text"
                    onChange={(event) => setForm({ ...form, cidade: event.target.value })}
                  />
                  <TextField
                    sx={{ width: '38%' }}
                    required
                    color="success"
                    margin="normal"
                    label="Estado"
                    id="estado"
                    name="estado"
                    type="text"
                    onChange={(event) => setForm({ ...form, estado: event.target.value })}
                  />

                  <div style={{ width: '100%', textAlign: 'center', margin: '1em' }}>
                    <h3>Geolocalização</h3>
                  </div>
                  <TextField
                    sx={{ width: '48%' }}
                    required
                    color="success"
                    margin="normal"
                    label="Latitude"
                    id="latitude"
                    name="latitude"
                    type="text"
                    onChange={(event) => setForm({ ...form, latitude: event.target.value })}
                  />
                  <TextField
                    sx={{ width: '48%' }}
                    required
                    color="success"
                    margin="normal"
                    label="Longitude"
                    id="longitude"
                    name="longitude"
                    type="text"
                    onChange={(event) => setForm({ ...form, longitude: event.target.value })}
                  />


                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, width: '90%' }}
                  >Cadastrar</Button>
                </div>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  )
}

export { PharmacyForm }