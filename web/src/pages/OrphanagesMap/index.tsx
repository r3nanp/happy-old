import React from 'react'
import { Link } from 'react-router-dom'

import { Map } from 'react-leaflet'

import { Container, SideBar, RegionMap, ArrowIcon } from './styles'

import mapMarkerImg from '../../images/map-marker.svg'

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita 😊</p>
        </header>

        <footer>
          <strong>Fortaleza</strong>
          <span>Ceará</span>
        </footer>

      </SideBar>

      <RegionMap>

      </RegionMap>

      <Link to="" className="create-orphanage">
        <ArrowIcon />
      </Link>
    </Container>
  )
}

export default OrphanagesMap
