import styled, { css } from 'styled-components'
import { FiPlus } from 'react-icons/fi'

export const Container = styled.div`
  display: flex;
`

const inputCss = css`
  width: 100%;
  background: #f5f8fa;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  outline: none;
  color: #5c8599;
`

export const Wrapper = styled.div`
  flex: 1;

  .create-orphanage-form {
    width: 700px;
    margin: 64px auto;

    background: #ffffff;
    border: 1px solid #d3e2e5;
    border-radius: 20px;

    padding: 64px 80px;

    overflow: hidden;

    .input-block + .input-block {
      margin-top: 24px;
    }

    .input-block label {
      display: flex;
      color: #8fa7b3;
      margin-bottom: 8px;
      line-height: 24px;
    }

    .input-block label span {
      font-size: 14px;
      color: #8fa7b3;
      margin-left: 24px;
      line-height: 24px;
    }

    .input-block input {
      height: 64px;
      padding: 0 16px;
    }

    .input-block textarea {
      min-height: 120px;
      max-height: 240px;
      resize: vertical;
      padding: 16px;
      line-height: 28px;
    }

    .input-block input,
    .input-block textarea {
      ${inputCss}
    }

    .input-block .new-image {
      width: 100%;
      height: 64px;
      background: #f5f8fa;
      border: 1px dashed #96d2f0;
      border-radius: 20px;
      cursor: pointer;
    }

    .input-block .button-select {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .button-select button {
      height: 64px;
      background: #f5f8fa;
      border: 1px solid #d3e2e5;
      color: #5c8599;
      cursor: pointer;
    }

    .button-select button:first-child {
      border-radius: 20px 0px 0px 20px;
    }

    .button-select button:last-child {
      border-radius: 0 20px 20px 0;
      border-left: 0;
    }

    .confirm-button {
      margin-top: 64px;

      width: 100%;
      height: 64px;
      border: 0;
      cursor: pointer;
      background: #3cdc8c;
      border-radius: 20px;
      color: #ffffff;
      font-weight: 800;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: background-color 0.2s;

      &:hover {
        background: #36cf82;
      }
    }

    .confirm-button svg {
      margin-right: 16px;
    }
  }
`

const legendCss = css`
  width: 100%;

  font-size: 32px;
  line-height: 34px;
  color: #5c8599;
  font-weight: 700;

  border-bottom: 1px solid #d3e2e5;
  margin-bottom: 40px;
  padding-bottom: 24px;
`

export const Register = styled.fieldset`
  border: 0;

  > legend {
    ${legendCss}
  }
`

export const Visit = styled.fieldset`
  margin-top: 80px;
  border: 0;

  > legend {
    ${legendCss}
  }
`

export const PlusIcon = styled(FiPlus)`
  size: 24;
  color: #15b6d6;
`
