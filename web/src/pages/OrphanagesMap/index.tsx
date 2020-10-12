import React from 'react'
import { Link } from 'react-router-dom'

import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import { Container, SideBar, ArrowIcon } from './styles'

import mapMarkerImg from '../../images/map-marker.svg'

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
        </footer>
      </SideBar>

      <Map
        center={[-3.7305253, -38.5311193]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <ArrowIcon />
      </Link>
    </Container>
  )
}

export default OrphanagesMap
