import styled, { css } from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
`

export const FormTitle = styled.Text`
  padding-top: 20px;
  color: #5c8599;
  font-size: 24px;
  font-family: nunito_700;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom-width: 0.8px;
  border-bottom-color: #d3e2e6;
`

export const Label = styled.Text`
  color: #8fa7b3;
  font-family: nunito_600;
  margin-bottom: 8px;
`

const inputStyle = css`
  background-color: #fff;
  border-width: 1.4px;
  border-color: #d3e2e6;
  border-radius: 20px;
  height: 56px;
  padding: 18px 24px;
  margin-bottom: 16px;
  text-align-vertical: top;
`

export const Input = styled.TextInput`
  ${inputStyle}
`

export const InputTextArea = styled.TextInput`
  ${inputStyle}
  height: 110px;
`

export const SelectImages = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  border-style: dashed;
  border-color: #96d2f0;
  border-width: 1.4px;
  border-radius: 20px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`

export const NextButton = styled.Text`
  font-family: nunito_800;
  font-size: 16px;
  color: #fff;
`
