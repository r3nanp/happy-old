import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Feather, FontAwesome } from '@expo/vector-icons'

import mapMarkerImg from '../../images/mapMarker.png'
import { RectButton } from 'react-native-gesture-handler'
import { Dimensions, Image, StyleSheet } from 'react-native'

import {
  Container,
  ImagesContainer,
  ImagesSlider,
  DetailsContainer,
  Title,
  Description,
  MapContainer,
  RoutesContainer,
  RoutesText,
  Separator,
  ScheduleContainer,
  ScheduleItem,
  ScheduleText,
  ContactText,
} from './styles'

const OrphanageDetails: React.FC = () => {
  return (
    <Container>
      <ImagesContainer>
        <ImagesSlider horizontal pagingEnabled>
          <Image
            style={styles.image}
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
          />
        </ImagesSlider>
      </ImagesContainer>

      <DetailsContainer>
        <Title>Lar amigos de jesus</Title>
        <Description>Oferece ajuda a crianças com câncer</Description>

        <MapContainer>
          <MapView
            initialRegion={{
              latitude: -3.7305253,
              longitude: -38.5311193,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={styles.map}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: -3.7305253,
                longitude: -38.5311193,
              }}
            />
          </MapView>
        </MapContainer>

        <RoutesContainer>
          <RoutesText>Ver rotas no Google Maps</RoutesText>
        </RoutesContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>
          Venha como se sentir a vontade e traga muito amor e paciência para
          dar.
        </Description>

        <ScheduleContainer>
          <ScheduleItem>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ScheduleText>Segunda à Sexta 8h às 18h</ScheduleText>
          </ScheduleItem>

          <ScheduleItem>
            <Feather name="info" size={40} color="#39CC83" />
            <ScheduleText>Atendemos fim de semana</ScheduleText>
          </ScheduleItem>
        </ScheduleContainer>
        <RectButton style={styles.contactButton} onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactText>Entrar em contato</ContactText>
        </RectButton>
      </DetailsContainer>
    </Container>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 150,
  },

  image: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },

  contactButton: {
    backgroundColor: '#3CDC8C',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 40,
  },
})

export default OrphanageDetails
