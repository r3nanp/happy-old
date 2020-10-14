import React, { useState } from 'react'

import { Map, Marker, TileLayer } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'

import { Container, Wrapper, Register, PlusIcon, Visit } from './styles'
import SideBar from '../../components/SideBar'

import mapIcon from '../../utils/MapIcon'

const CreateOrphanage: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng
    setPosition({
      latitude: lat,
      longitude: lng,
    })
  }

  return (
    <Container>
      <SideBar />

      <Wrapper>
        <form className="create-orphanage-form">
          <Register>
            <legend>Dados</legend>

            <Map
              center={[-3.7305253, -38.5311193]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
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
