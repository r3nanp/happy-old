import React from 'react'
import { Feather } from '@expo/vector-icons'

import { Container, OrphanagesText, CreateOrphanage } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <OrphanagesText>2 orfanatos encontrados</OrphanagesText>

      <CreateOrphanage onPress={() => {}}>
        <Feather name="plus" size={20} color="#FFF" />
      </CreateOrphanage>
    </Container>
  )
}

export default Footer
