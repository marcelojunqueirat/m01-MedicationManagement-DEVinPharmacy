import { formatarCNPJ, formatarCelular } from "../../utils/formatar"
import { TileLayer } from "react-leaflet"
import { MapContainer, Marker, Popup } from "react-leaflet"
import { Icon } from "leaflet"
import "./style.css"

function Map({ pharmacies }) {

  const customIcon = new Icon({
    iconUrl: "./pino.png",
    iconSize: [38, 38]
  })

  if (pharmacies?.length > 0) {
    return (
      <>
        <MapContainer id="map-container" center={[pharmacies[0].latitude, pharmacies[0].longitude]} zoom={13} >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {pharmacies.map((localPharmarcy) => (
            <Marker
              icon={customIcon}
              key={localPharmarcy.id}
              position={[localPharmarcy.latitude.replace(',', '.'), localPharmarcy.longitude.replace(',', '.')]}
            >
              <Popup>
                <div id="popup-info">
                  <h3>{localPharmarcy.razaoSocial}</h3>
                  <p>
                    <b>CNPJ:</b> {formatarCNPJ(localPharmarcy.cnpj)}
                  </p>
                  <p>
                    <b>E-mail:</b> {localPharmarcy.email}
                  </p>
                  <p>
                    <b>Celular</b>: <a target="_blank" href={`https://wa.me/55${localPharmarcy.celular}`}>{formatarCelular(localPharmarcy.celular)}</a>
                  </p>
                  {localPharmarcy.telefone &&
                    <p>
                      <b>Telefone</b>: {formatarCelular(localPharmarcy.telefone)}
                    </p>
                  }
                  <p>
                    <b>Endereço</b>: {`${localPharmarcy.logradouro}${(localPharmarcy.complemento) ? ' - ' + localPharmarcy.complemento : ''}, ${localPharmarcy.numero} - ${localPharmarcy.bairro}, ${localPharmarcy.cidade} - ${localPharmarcy.estado}, ${localPharmarcy.cep} `}
                  </p>

                </div>
              </Popup>
            </Marker>
          ))}

        </MapContainer >
      </>
    )
  } else {
    return (
      <>
        <MapContainer id="map-container" center={[-27.5944418, -48.52081496678028]} zoom={9} >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer >
      </>
    )
  }
}


export { Map }