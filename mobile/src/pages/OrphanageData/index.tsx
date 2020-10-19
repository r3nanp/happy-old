import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import { Image, StyleSheet, Switch } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import api from '../../services/api'
import { useNavigation, useRoute } from '@react-navigation/native'

import {
  Container,
  FormTitle,
  Label,
  Input,
  InputTextArea,
  SelectImages,
  SwitchContainer,
  UploadedImagesContainer,
  NextButton,
} from './styles'

interface OrphanageDataRouteParams {
  position: {
    latitude: number
    longitude: number
  }
}

const OrphanageData: React.FC = () => {
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpenOnWeekends] = useState(true)
  const [images, setImages] = useState<string[]>([])

  const navigation = useNavigation()
  const route = useRoute()
  const params = route.params as OrphanageDataRouteParams

  async function handleCreateOrphanage() {
    const { latitude, longitude } = params.position

    const data = new FormData()

    data.append('name', name)
    data.append('about', about)
    data.append('instructions', instructions)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('opening_hours', opening_hours)
    data.append('open_on_weekends', String(open_on_weekends))

    images.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any)
    })

    await api.post('orphanages', data)

    navigation.navigate('OrphanagesMap')
  }

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync()

    if (status !== 'granted') {
      alert('Vish, precisamos de acesso a sua galeria...')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    })

    if (result.cancelled) {
      return
    }

    const { uri: image } = result

    setImages([...images, image])
  }

  return (
    <Container contentContainerStyle={{ padding: 30 }}>
      <FormTitle>Dados</FormTitle>

      <Label>Nome</Label>
      <Input value={name} onChangeText={setName} />

      <Label>Sobre</Label>
      <InputTextArea multiline value={about} onChangeText={setAbout} />

      {/* <Label>Whatsapp</Label>
      <Input /> */}

      <Label>Fotos</Label>
      <SelectImages onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </SelectImages>

      <UploadedImagesContainer>
        {images.map(image => {
          return (
            <Image
              key={image}
              style={styles.uploadImage}
              source={{
                uri: image,
              }}
            />
          )
        })}
      </UploadedImagesContainer>

      <FormTitle>Visitação</FormTitle>

      <Label>Instruções</Label>
      <InputTextArea
        multiline
        value={instructions}
        onChangeText={setInstructions}
      />

      <Label>Horário de visitas</Label>
      <Input value={opening_hours} onChangeText={setOpeningHours} />

      <SwitchContainer>
        <Label>Atende fim de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
        />
      </SwitchContainer>

      <RectButton style={styles.nextButton} onPress={handleCreateOrphanage}>
        <NextButton>Cadastrar</NextButton>
      </RectButton>
    </Container>
  )
}

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },
  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  uploadImage: {
    width: 64,
    height: 64,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8,
  },
})

export default OrphanageData
