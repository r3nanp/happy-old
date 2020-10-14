/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

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

const Orphanage: React.FC = () => {
  return (
    <Container>
      <SideBar />

      <Wrapper>
        <OrphanageDetails>
          <img
            src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
            alt="Lar das meninas"
          />

          <ImagesContainer>
            <button className="active" type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
          </ImagesContainer>
          <OrphanageDetailsContent>
            <h1>Lar das meninas</h1>
            <p>
              Presta assistência a crianças de 06 a 15 anos que se encontre em
              situação de risco e/ou vulnerabilidade social.
            </p>

            <MapContainer>
              <Map
                center={[-3.7305253, -38.5311193]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[-3.7305253, -38.5311193]}
                />
              </Map>

              <footer>
                <a href="https://www.google.com/maps">Ver rotas no Google Maps</a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>
              Venha como se sentir mais à vontade e traga muito amor para dar.
            </p>

            <OpeningDetails>
              <Hour>
                <ClockIcon />
                Segunda à Sexta <br />
                8h às 18h
              </Hour>
              <OpenOnWeekends>
                <InfoIcon />
                Atendemos <br />
                fim de semana
              </OpenOnWeekends>
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
