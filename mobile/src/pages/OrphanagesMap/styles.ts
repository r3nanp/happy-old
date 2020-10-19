import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`
export const CalloutContainer = styled.View`
  width: 160px;
  height: 46px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  justify-content: center;
`

export const MarkerName = styled.Text`
  color: #0089a5;
  font-size: 14px;
  font-family: nunito_700;
`
export const Footer = styled.View`
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

  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 1;
  }

  shadow-opacity: 0.22;
  shadow-radius: 2.22px;
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
