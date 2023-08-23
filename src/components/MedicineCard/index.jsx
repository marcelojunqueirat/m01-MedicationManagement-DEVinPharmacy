import { useState } from "react";
import { Card, CardContent, Button, Modal, Box } from "@mui/material"
import "./style.css"

function MedicineCard({ medicine }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              onClick={handleOpen}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textAlign: 'center' }}
            >Detalhes</Button>
          </CardContent>
        </Card>

        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              backgroundColor: 'var(--secondary-bg-color)',
              border: '1px solid #000',
              boxShadow: 24,
              borderRadius: '35px',
              p: 4,
              textAlign: 'center'
            }}
          >
            <section id="modal-information">
              <img src={medicine.img} alt={`Foto do remédio ${medicine.medicamento}`} width={130} />
              <div id="medicamento-modal">
                <p>
                  {medicine.medicamento}
                </p>
              </div>

              <div id="preco-modal">
                <p>R$ {Number(medicine.preco).toFixed(2).replace('.', ',')}<span>/un</span></p>
              </div>

              <div className="modal-data">
                <p>
                  Laboratório: <span>{medicine.laboratorio}</span>
                </p>
              </div>

              <div className="modal-data">
                <p>
                  Dosagem: <span>{medicine.dosagem}</span>
                </p>
              </div>

              <div className="modal-data">
                <p>
                  Tipo do Medicamento: <span>{medicine.tipoDoMedicamento}</span>
                </p>
              </div>

              {medicine.descricaoMedicamento &&
                <div className="modal-data">
                  <p>
                   Descrição: <span>{medicine.descricaoMedicamento}</span>
                  </p>
                </div>
              }

              <Button
                onClick={handleClose}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, textAlign: 'center' }}
              >Fechar</Button>
            </section>
          </Box>
        </Modal>

      </section>
    </>
  )
}

export { MedicineCard }