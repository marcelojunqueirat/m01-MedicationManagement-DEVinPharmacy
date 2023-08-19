import { useState } from "react"
import { Card, CardContent, Grid, TextField, Button } from "@mui/material"
import { AlertMessage } from "../../components/Alert"
import { Loading } from "../../components/Loading"
import { useApp } from "../../hooks/useApp"
import "./style.css"

function LoginForm() {
  const { setUserData } = useApp()

  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(false)
  const [alertErrorEmail, setAlertErrorEmail] = useState(false)
  const [alertErrorPassword, setAlertErrorPassword] = useState(false)

  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault()
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\\-]+$/

    if (!emailRegex.test(form.email) || form.email.length < 8) {
      setAlertErrorEmail(true)
      alertTime(setAlertErrorEmail, 6000)
      setLoading(false)
      return
    }

    if (!passwordRegex.test(form.senha)) {
      setAlertErrorPassword(true)
      alertTime(setAlertErrorPassword, 6000)
      setLoading(false)
      return
    }

    if (emailRegex.test(form.email) && passwordRegex.test(form.senha)) {
      setLoading(false)
      localStorage.setItem("user", JSON.stringify(form))
      setUserData(form)
    }
  }

  const alertTime = (setStateAlert, time) => {
    setTimeout(() => {
      setStateAlert(false);
    }, time)
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <section id="login">
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '35px',
          margin: '1em'
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid item xs={12} sm={8} md={5}>
              <div id="titulo-sistema">
                <img src="./logo.png" alt="Logo do sistema Medication Management - DEVinPharmacy" />
                <h3>
                  Medication Management
                </h3>
              </div>

              <div id="menu-login">
                <h2>Login</h2>
                {alertErrorEmail && <div className="errorMessage"><AlertMessage severity="error" alertMessage="E-mail inválido. E-mail deve ser no formato email@dominio.com" /></div>}
                {alertErrorPassword && <div className="errorMessage"><AlertMessage severity="error" alertMessage="Senha inválida. Senha deve possuir 8 ou mais caracteres com números e letras." /></div>}
                <TextField
                  sx={{ width: '90%' }}
                  color="success"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  // type="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                />
                <TextField
                  sx={{ width: '90%' }}
                  color="success"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputProps={{ minLength: 8 }}
                  onChange={(event) => setForm({ ...form, senha: event.target.value })}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, width: '90%' }}
                >Entrar</Button>
              </div>

              <div id="footer-login">
                <p>
                  © DEVinPharmacy LTDA | 💊
                </p>
              </div>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

export { LoginForm }