import { useState } from "react";
import { Alert, Collapse, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close";
import "./style.css"

function AlertMessage({ severity, alertMessage }) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="alertMessage">
        <Collapse in={open}>
          <Alert
            severity={severity}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {alertMessage}
          </Alert>
        </Collapse>
      </div>
    </>
  )
}

export { AlertMessage }