import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Dimensions, StyleSheet } from 'react-native'

import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Footer from '../../components/Footer'

import mapMarker from '../../images/mapMarker.png'

import { Container, CalloutContainer, MarkerName } from './styles'

const OrphanagesMap: React.FC = () => {
  const navigation = useNavigation()

  function handleNavigateToOrphanageDetail() {
    navigation.navigate('OrphanageDetails')
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
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -3.7305253,
            longitude: -38.5311193,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetail}>
            <CalloutContainer>
              <MarkerName>Amigos de Jesus</MarkerName>
            </CalloutContainer>
          </Callout>
        </Marker>
      </MapView>

      <Footer />
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
