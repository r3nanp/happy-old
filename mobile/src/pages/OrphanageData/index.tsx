import React from 'react'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import { StyleSheet, Switch } from 'react-native'

import {
  Container,
  FormTitle,
  Label,
  Input,
  InputTextArea,
  SelectImages,
  SwitchContainer,
  NextButton,
} from './styles'

const OrphanageData: React.FC = () => {
  return (
    <Container contentContainerStyle={{ padding: 30 }}>
      <FormTitle>Dados</FormTitle>

      <Label>Nome</Label>
      <Input />

      <Label>Sobre</Label>
      <InputTextArea multiline />

      <Label>Whatsapp</Label>
      <Input />

      <Label>Fotos</Label>
      <SelectImages>
        <Feather name="plus" size={24} color="#15B6D6" />
      </SelectImages>

      <FormTitle>Visitação</FormTitle>

      <Label>Instruções</Label>
      <InputTextArea multiline />

      <Label>Horário de visitas</Label>
      <Input />

      <SwitchContainer>
        <Label>Atende fim de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
        />
      </SwitchContainer>

      <RectButton style={styles.nextButton} onPress={() => {}}>
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
})

export default OrphanageData
