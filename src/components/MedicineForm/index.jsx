import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, Grid, TextField, InputLabel, Select, MenuItem, FormControl, Button } from "@mui/material"
import { medicineTypes } from "../../data"
import { Loading } from "../../components/Loading"
import { AlertMessage } from "../../components/Alert"
import { useApp } from "../../hooks/useApp"
import "./style.css"

function MedicineForm() {
  const { AddMedicine } = useApp()

  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(false)
  const [alertField, setAlertField] = useState(false)
  const [successAlert, setSuccessAlert] = useState(false)

  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault()

    try {
      for (const field in form) {
        if (field != 'descricaoMedicamento')
          if (form[field].length === 0 || form[field] === '') {
            setAlertField(true)
            alertTime(setAlertField, 5000)
            setLoading(false)
            return
          }
      }
      AddMedicine(form)
      setSuccessAlert(true)
      setForm({})
      alertTime(setSuccessAlert, 8000)

    } catch (error) {
      console.log("Erro ao cadastrar Medicamento.", error)
    }

    console.log(form)
    setLoading(false)
  }

  const alertTime = (setStateAlert, time) => {
    setTimeout(() => {
      setStateAlert(false);
    }, time)
  }


  return (
    <>
      <section id="form-medicine">
        <Card
          sx={{
            borderRadius: '35px',
            backgroundColor: '#FFF'
          }}
        >
          <div id="titulo-form-medicamentos">
            <h2>Cadastro de Medicamento</h2>
          </div>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid item xs={12} sm={8} md={5}>
                <div id="body-form-medicine">
                  <TextField
                    sx={{ width: '97%' }}
                    required
                    color="success"
                    margin="normal"
                    label="Medicamento"
                    id="medicamento"
                    name="medicamento"
                    type="text"
                    autoFocus
                    value={form.medicamento || ''}
                    onChange={(event) => setForm({ ...form, medicamento: event.target.value })}
                  />
                  <TextField
                    sx={{ width: '48%' }}
                    required
                    color="success"
                    margin="normal"
                    label="Laboratório"
                    id="laboratorio"
                    name="laboratorio"
                    type="text"
                    value={form.laboratorio || ''}
                    onChange={(event) => setForm({ ...form, laboratorio: event.target.value })}
                  />

                  <TextField
                    sx={{ width: '48%' }}
                    required
                    color="success"
                    margin="normal"
                    label="Dosagem"
                    id="dosagem"
                    name="dosagem"
                    type="text"
                    value={form.dosagem || ''}
                    onChange={(event) => setForm({ ...form, dosagem: event.target.value })}
                  />

                  <TextField
                    sx={{ width: '48%' }}
                    required
                    color="success"
                    margin="normal"
                    label="Preço Unitário (R$)"
                    id="preco"
                    name="preco"
                    type="number"
                    value={Number(form.preco) || ''}
                    onChange={(event) => setForm({ ...form, preco: event.target.value })}
                  />

                  <FormControl
                    sx={{ width: '48%' }}
                    required
                    color="success"
                    margin="normal"
                  >
                    <InputLabel id="tipo-do-medicamento">Tipo do Medicamento</InputLabel>
                    <Select
                      labelId="tipo-do-medicamento"
                      id="tipo-do-medicamento"
                      value={form.tipoDoMedicamento || ''}
                      label="Tipo do Medicamento"
                      onChange={(event) => setForm({ ...form, tipoDoMedicamento: event.target.value })}
                    >
                      {
                        medicineTypes.map((type) => (
                          <MenuItem key={type} value={type}>{type}</MenuItem>
                        ))
                      }
                    </Select>
                  </FormControl>

                  <TextField
                    sx={{ width: '97%' }}
                    color="success"
                    margin="normal"
                    label="Descrição do Medicamento"
                    id="descricaoMedicamento"
                    name="descricaoMedicamento"
                    type="text"
                    multiline
                    rows={4}
                    value={form.descricaoMedicamento || ''}
                    onChange={(event) => setForm({ ...form, descricaoMedicamento: event.target.value })}
                  />

                  {loading && <Loading />}
                  {alertField && <AlertMessage severity="error" alertMessage="Preencha todos os campos obrigatórios." />}
                  {successAlert
                    &&
                    <AlertMessage
                      severity="success"
                      alertMessage={
                        <>
                          <p>Medicamento cadastrado com sucesso.</p>
                          <Link to='/medicine'>Voltar a Listagem de Medicamentos</Link>
                        </>
                      }
                    />}
                  <Button
                    type="submit"
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

export { MedicineForm }