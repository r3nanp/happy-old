import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { Dimensions, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import MapView, { Marker } from 'react-native-maps'
import mapMarkerImg from '../../images/mapMarker.png'

import { Container, NextButton } from './styles'

const SelectMapPosition: React.FC = () => {
  const navigation = useNavigation()

  function handleNextStep() {
    navigation.navigate('OrphanageData')
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
      >
        <Marker
          icon={mapMarkerImg}
          coordinate={{ latitude: -3.7305253, longitude: -38.5311193 }}
        />
      </MapView>

      <RectButton style={styles.nextButton} onPress={handleNextStep}>
        <NextButton>Próximo</NextButton>
      </RectButton>
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
