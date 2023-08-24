import { TileLayer } from "react-leaflet"
import { MapContainer, Marker, Popup } from "react-leaflet"
import "./style.css"

function Map({ pharmacies }) {

  return (
    <>
      <MapContainer id="map-container" center={[pharmacies[0].latitude, pharmacies[0].longitude]} zoom={12} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {pharmacies.map((localPharmarcy) => (
          <Marker
            key={localPharmarcy.id}
            position={[localPharmarcy.latitude, localPharmarcy.longitude]}
          >
            <Popup>
              <h3>{localPharmarcy.razaoSocial}</h3>
              <p>{`E-mail: ${localPharmarcy.email}`}</p>
              <p>{`Whatsapp: ${localPharmarcy.celular}`}</p>
            </Popup>
          </Marker>
        ))}

      </MapContainer >
    </>
  )
}


export { Map }