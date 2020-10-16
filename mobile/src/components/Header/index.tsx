import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import { Container, HeaderText } from './styles'

import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

interface HeaderProps {
  title: string
  showCancel?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, showCancel = true }) => {
  const navigation = useNavigation()

  function handleGoBackToHome() {
    navigation.navigate('OrphanagesMap')
  }

  return (
    <Container>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      <HeaderText>{title}</HeaderText>

      {showCancel ? (
        <BorderlessButton onPress={handleGoBackToHome}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </Container>
  )
}

export default Header
