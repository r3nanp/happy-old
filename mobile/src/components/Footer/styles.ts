import styled from 'styled-components/native'

export const Container = styled.View`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;

  background-color: #fff;
  border-radius: 20px;
  height: 56px;
  padding-left: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  elevation: 3;
`

export const OrphanagesText = styled.Text`
  color: #8fa7b3;
  font-family: nunito_700;
`

export const CreateOrphanage = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: #15c3d6;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`
