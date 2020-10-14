import React from 'react'

import { Map, Marker, TileLayer } from 'react-leaflet'
import L from 'leaflet'

import mapMarkerImg from '../../images/map-marker.svg'

import { Container, Wrapper, Register, PlusIcon, Visit } from './styles'
import SideBar from '../../components/SideBar'

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
})

const CreateOrphanage: React.FC = () => {
  return (
    <Container>
      <SideBar />

      <Wrapper>
        <form className="create-orphanage-form">
          <Register>
            <legend>Dados</legend>

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              <Marker
                interactive={false}
                icon={happyMapIcon}
                position={[-27.2092052, -49.6401092]}
              />
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image"></div>

              <button className="new-image">
                <PlusIcon />
              </button>
            </div>
          </Register>

          <Visit>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">
                  Sim
                </button>
                <button type="button">Não</button>
              </div>
            </div>
          </Visit>
          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </Wrapper>
    </Container>
  )
}

export default CreateOrphanage
