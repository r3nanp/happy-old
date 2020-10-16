import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Dimensions, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import MapView, { MapEvent, Marker } from 'react-native-maps'
import mapMarkerImg from '../../images/mapMarker.png'

import { Container, NextButton } from './styles'

const SelectMapPosition: React.FC = () => {
  const navigation = useNavigation()
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  function handleNextStep() {
    navigation.navigate('OrphanageData', { position })
  }

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate)
  }

  return (
    <Container>
      <MapView
        initialRegion={{
          latitude: -3.7305253,
          longitude: -38.5311193,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
        onPress={handleSelectMapPosition}
      >
        {position.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />
        )}
      </MapView>

      {position.latitude !== 0 && (
        <RectButton style={styles.nextButton} onPress={handleNextStep}>
          <NextButton>Próximo</NextButton>
        </RectButton>
      )}
    </Container>
  )
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },
})

export default SelectMapPosition
