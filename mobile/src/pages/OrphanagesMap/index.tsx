import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Dimensions, StyleSheet } from 'react-native'
import api from '../../services/api'

import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import mapMarker from '../../images/mapMarker.png'

import { Feather } from '@expo/vector-icons'

import {
  Container,
  CalloutContainer,
  MarkerName,
  Footer,
  OrphanagesText,
  CreateOrphanage,
} from './styles'

interface OrphanageProps {
  id: number
  name: string
  latitude: number
  longitude: number
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<OrphanageProps[]>([])
  const navigation = useNavigation()

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })
  }, [])

  function handleNavigateToOrphanageDetail(id: number) {
    navigation.navigate('OrphanageDetails', { id })
  }

  function handleNavigateToSelectMap() {
    navigation.navigate('SelectMapPosition')
  }

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -3.7305253,
          longitude: -38.5311193,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 2.7,
                y: 0.8,
              }}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            >
              <Callout
                tooltip
                onPress={() => handleNavigateToOrphanageDetail(orphanage.id)}
              >
                <CalloutContainer>
                  <MarkerName>{orphanage.name}</MarkerName>
                </CalloutContainer>
              </Callout>
            </Marker>
          )
        })}
      </MapView>

      <Footer>
        <OrphanagesText>{orphanages.length} orfanatos encontrados</OrphanagesText>

        <CreateOrphanage onPress={handleNavigateToSelectMap}>
          <Feather name="plus" size={20} color="#FFF" />
        </CreateOrphanage>
      </Footer>
    </Container>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

export default OrphanagesMap
