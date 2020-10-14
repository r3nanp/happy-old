import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, LeftBar, ArrowIcon } from './styles'
import mapMarkerImg from '../../images/map-marker.svg'

const SideBar: React.FC = () => {
  const { goBack } = useHistory()

  return (
    <Container>
      <LeftBar>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <ArrowIcon />
          </button>
        </footer>

      </LeftBar>
    </Container>
  )
}

export default SideBar
