import React, { useEffect, useState } from 'react'
import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Feather, FontAwesome } from '@expo/vector-icons'

import mapMarkerImg from '../../images/mapMarker.png'
import { RectButton } from 'react-native-gesture-handler'

import { useRoute } from '@react-navigation/native'
import api from '../../services/api'
import { AppLoading } from 'expo'

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
  ContactText,
} from './styles'

interface OrphanageDetailsRouteParams {
  id: number
}

interface OrphanageProps {
  id: number
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

const OrphanageDetails: React.FC = () => {
  const [orphanage, setOrphanage] = useState<OrphanageProps>()

  const route = useRoute()

  const params = route.params as OrphanageDetailsRouteParams

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data)
    })
  }, [params.id])

  if (!orphanage) {
    return <AppLoading />
  }

  function handleOpenGoogleMapsRoutes() {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`
    )
  }

  // function handleOpenWhatsapp() {
  //   Linking.openURL(`https://wa.me/+55${orphanage.whatsapp}`)
  // }

  return (
    <Container>
      <ImagesContainer>
        <ImagesSlider horizontal pagingEnabled>
          {orphanage.images.map(image => {
            return (
              <Image
                key={image.id}
                style={styles.image}
                source={{
                  uri: image.url,
                }}
              />
            )
          })}
        </ImagesSlider>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{orphanage.name}</Title>
        <Description>{orphanage.about}</Description>

        <MapContainer>
          <MapView
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
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
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            />
          </MapView>
        </MapContainer>

        <RoutesContainer onPress={handleOpenGoogleMapsRoutes}>
          <RoutesText>Ver rotas no Google Maps</RoutesText>
        </RoutesContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>{orphanage.instructions}</Description>

        <ScheduleContainer>
          <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <Text style={[styles.scheduleText, styles.scheduleTextBlue]}>
              Segunda à Sexta {orphanage.opening_hours}
            </Text>
          </View>

          {orphanage.open_on_weekends ? (
            <View style={[styles.scheduleItem, styles.scheduleItemGreen]}>
              <Feather name="info" size={40} color="#39CC83" />
              <Text style={[styles.scheduleText, styles.scheduleTextGreen]}>
                Atendemos fim de semana
              </Text>
            </View>
          ) : (
            <View style={[styles.scheduleItem, styles.scheduleItemRed]}>
              <Feather name="info" size={40} color="#ff669d" />
              <Text style={[styles.scheduleText, styles.scheduleTextRed]}>
                Não atendemos fim de semana
              </Text>
            </View>
          )}
        </ScheduleContainer>

        {/* <RectButton style={styles.contactButton} onPress={handleOpenWhatsapp}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactText>Entrar em contato</ContactText>
        </RectButton> */}
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

  scheduleItem: {
    width: '48%',
    padding: 20,
  },

  scheduleItemBlue: {
    backgroundColor: '#E6F7FB',
    borderWidth: 1,
    borderColor: '#B3DAE2',
    borderRadius: 20,
  },

  scheduleItemGreen: {
    backgroundColor: '#EDFFF6',
    borderWidth: 1,
    borderColor: '#A1E9C5',
    borderRadius: 20,
  },

  scheduleItemRed: {
    backgroundColor: '#f5f5f5',
    borderColor: '#ff669d',
    borderWidth: 1,
    borderRadius: 20,
  },

  scheduleTextBlue: {
    color: '#5C8599',
  },

  scheduleTextRed: {
    color: '#ff669d',
  },

  scheduleTextGreen: {
    color: '#37C77F',
  },

  scheduleText: {
    fontFamily: 'nunito_600',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },
})

export default OrphanageDetails
