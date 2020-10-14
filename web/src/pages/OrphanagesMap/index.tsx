/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Link } from 'react-router-dom'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import mapMarkerImg from '../../images/map-marker.svg'
import mapIcon from '../../utils/MapIcon'

import { Container, SideBar, PlusIcon, ArrowIcon, ArrowIconRight } from './styles'

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita 😊</p>
        </header>

        <footer>
          <strong>Fortaleza</strong>
          <span>Ceará</span>

          <Link to="/" className="backToMenu">
            <ArrowIcon />
          </Link>
        </footer>
      </SideBar>

      <Map
        center={[-3.7305253, -38.5311193]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker
          icon={mapIcon}
          position={[-3.7305253, -38.5311193]}
        >

          <Popup closeButton={false} minWidth={248} minHeight={248} className="map-popup">
            Lar Amigos de Jesus
            <Link to="/orphanages/1">
              <ArrowIconRight />
            </Link>

          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <PlusIcon />
      </Link>
    </Container>
  )
}

export default OrphanagesMap
