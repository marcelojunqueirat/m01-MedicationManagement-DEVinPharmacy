import { Card, CardContent, Grid, TextField, Button } from "@mui/material"
import "./style.css"

function Login() {
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
          <form>
            <Grid item xs={12} sm={8} md={5}>
              <div id="titulo-sistema">
                <img src="./logo.png" alt="Logo do sistema Medication Management - DEVinPharmacy" />
                <h3>
                  Medication Management
                </h3>
              </div>

              <div id="menu-login">
                <h2>Login</h2>
                <TextField
                  sx={{ width: '90%' }}
                  color="success"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                // onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                // onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <Button
                  color="success"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, width: '90%', backgroundColor: 'var(--main-bg-color)' }}
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

export { Login }