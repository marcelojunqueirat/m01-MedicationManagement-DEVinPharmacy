import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, Grid, TextField, Button } from "@mui/material"
import { Loading } from "../../components/Loading"
import { AlertMessage } from "../../components/Alert"
import { api } from "../../services/api"
import { useApp } from "../../hooks/useApp"
import "./style.css"

function PharmacyForm() {
  const { AddPharmacy } = useApp()

  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(false)
  const [alertField, setAlertField] = useState(false)
  const [cepMessage, setCepMessage] = useState('')
  const [cepError, setCepError] = useState(false)
  const [successAlert, setSuccessAlert] = useState(false)

  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault()

    try {
      for (const field in form) {
        if (field != 'telefone' && field != 'complemento')
          if (form[field].length === 0 || form[field] === '') {
            setAlertField(true)
            alertTime(setAlertField, 5000)
            setLoading(false)
            return
          }
      }
      AddPharmacy(form)
      setSuccessAlert(true)
      setForm({})
      alertTime(setSuccessAlert, 8000)
    } catch (error) {
      console.log("Erro ao cadastrar Farmácia.", error)
    }

    setLoading(false)
  }

  const alertTime = (setStateAlert, time) => {
    setTimeout(() => {
      setStateAlert(false);
    }, time)
  }

  const fetchDados = async (cep) => {
    if (!cep || cep.length != 8) {
      setCepError(true)
      setCepMessage("CEP precisa ter 8 digitos")
      return
    }
    setLoading(true)
    try {
      const result = await api.get(`/${cep}/json/`)
      if (!!result.data) {
        setCepError(false)
        setCepMessage('')
        let address = result.data
        setForm({
          ...form,
          cep: address.cep.replace('-', ''),
          logradouro: address.logradouro,
          complemento: address.complemento,
          bairro: address.bairro,
          cidade: address.localidade,
          estado: address.uf
        })
      }
    } catch (error) {
      console.log("CEP inválido", error);
    }
    setLoading(false)
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
          <div id="titulo-form-farmacia">
            <h2>Cadastro de Farmácia</h2>
          </div>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid item xs={12} sm={8} md={5}>
                <div id="body-form-pharmacy">
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
                    value={form.razaoSocial || ''}
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
                    value={form.nomeFantasia || ''}
                    onChange={(event) => setForm({ ...form, nomeFantasia: event.target.value })}
                  />
                  <TextField
                    sx={{ width: '48%' }}
                    required
                    color="success"
                    margin="normal"
                    label="CNPJ"
                    name="cnpj"
                    type="number"
                    id="cnpj"
                    inputProps={{ maxLength: 14 }}
                    value={form.cnpj || ''}
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
                    value={form.email || ''}
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
                    inputProps={{ maxLength: 10 }}
                    value={form.telefone || ''}
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
                    inputProps={{ maxLength: 11 }}
                    value={form.celular || ''}
                    onChange={(event) => setForm({ ...form, celular: event.target.value })}
                  />
                  <div id="border" />
                  <div style={{ width: '100%', textAlign: 'center' }}>
                    <h3>Endereço</h3>
                  </div>
                  <TextField
                    error={cepError}
                    sx={{ width: '38%' }}
                    required
                    color="success"
                    margin="normal"
                    label="CEP"
                    id="cep"
                    name="cep"
                    inputProps={{ maxLength: 8 }}
                    type="text"
                    helperText={cepMessage}
                    value={form.cep || ''}
                    onChange={(event) => setForm({ ...form, cep: event.target.value })}
                    onBlur={() => fetchDados(form.cep)}
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
                    value={form.logradouro || ''}
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
                    value={form.numero || ''}
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
                    value={form.bairro || ''}
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
                    value={form.complemento || ''}
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
                    value={form.cidade || ''}
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
                    value={form.estado || ''}
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
                    value={form.latitude || ''}
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
                    value={form.longitude || ''}
                    onChange={(event) => setForm({ ...form, longitude: event.target.value })}
                  />

                  {loading && <Loading />}
                  {alertField && <AlertMessage severity="error" alertMessage="Preencha todos os campos obrigatórios." />}
                  {successAlert &&
                    <AlertMessage
                      severity="success"
                      alertMessage={
                        <>
                          <p>Farmácia cadastrada com sucesso</p>
                          <Link to='/map'>Voltar a tela de Mapa.</Link>
                        </>
                      }
                    />
                  }

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

export { PharmacyForm }