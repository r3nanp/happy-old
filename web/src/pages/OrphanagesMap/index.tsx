/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  SideBar,
  PlusIcon,
  ArrowIcon,
  ArrowIconRight,
} from './styles'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import api from '../../services/api'

import mapIcon from '../../utils/MapIcon'

import mapMarkerImg from '../../images/map-marker.svg'

interface OrphanageProps {
  id: number
  name: string
  latitude: number
  longitude: number
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<OrphanageProps[]>([])

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data)
    })
  }, [])

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

        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={248}
                minHeight={248}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <ArrowIconRight />
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <PlusIcon />
      </Link>
    </Container>
  )
}

export default OrphanagesMap
