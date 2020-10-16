import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
`
export const ImagesContainer = styled.View`
  height: 240px;
`

export const ImagesSlider = styled.ScrollView``

export const DetailsContainer = styled.View`
  padding: 24px;
`

export const Title = styled.Text`
  color: #4d6f80;
  font-size: 30px;
  font-family: nunito_700;
`

export const Description = styled.Text`
  font-family: nunito_600;
  color: #5c8599;
  line-height: 24px;
  margin-top: 16px;
`

export const MapContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
  border-width: 1.2px;
  border-color: #b3dae2;
  margin-top: 40px;
  background-color: #e6f7fb;
`

export const RoutesContainer = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
  justify-content: center;
`

export const RoutesText = styled.Text`
  font-family: nunito_700;
  color: #0089a5;
`

export const Separator = styled.View`
  height: 0.8px;
  width: 100%;
  background-color: #d3e2e6;
  margin-top: 40px;
  margin-bottom: 40px;
`

export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`

export const ContactText = styled.Text`
  font-family: nunito_800;
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`
