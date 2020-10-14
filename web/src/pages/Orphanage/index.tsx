/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Map, Marker, TileLayer } from 'react-leaflet'

import {
  Container,
  Wrapper,
  OrphanageDetails,
  ImagesContainer,
  OrphanageDetailsContent,
  MapContainer,
  OpeningDetails,
  Hour,
  ClockIcon,
  OpenOnWeekends,
  InfoIcon,
  WhatsappIcon,
} from './styles'

import SideBar from '../../components/SideBar'
import mapIcon from '../../utils/MapIcon'
import api from '../../services/api'
import { FiClock } from 'react-icons/fi'

interface Orphanage {
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  images: Array<{
    id: number
    url: string
  }>
}

interface RoutesParams {
  id: string
}

const Orphanage: React.FC = () => {
  const params = useParams<RoutesParams>()
  const [orphanage, setOrphanage] = useState<Orphanage>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    api.get(`/orphanages/${params.id}`).then((response) => {
      setOrphanage(response.data)
    })
  }, [params.id])

  if (!orphanage) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <SideBar />

      <Wrapper>
        <OrphanageDetails>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <ImagesContainer>
            {orphanage.images.map((image, index) => {
              return (
                <button
                  key={image.id}
                  className={activeImageIndex === index ? 'active' : ''}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index)
                  }}
                >
                  <img src={image.url} alt={orphanage.name} />
                </button>
              )
            })}
          </ImagesContainer>
          <OrphanageDetailsContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpeningDetails>
              <Hour>
                <ClockIcon />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </Hour>
              {orphanage.open_on_weekends ? (
                <OpenOnWeekends>
                  <InfoIcon />
                  Atendemos <br />
                  fim de semana
                </OpenOnWeekends>
              ) : (
                <OpenOnWeekends className="dont-open">
                  <FiClock size={32} color="#FF669D" />
                  Não atendemos <br />
                  fim de semana
                </OpenOnWeekends>
              )}
            </OpeningDetails>

            <button type="button" className="contact-button">
              <WhatsappIcon />
              Entrar em contato
            </button>
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </Wrapper>
    </Container>
  )
}

export default Orphanage
