import styled, { css } from 'styled-components'
import { FiArrowRight, FiPlus, FiArrowLeft } from 'react-icons/fi'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  .create-orphanage {
    z-index: 1000;
    position: absolute;
    right: 40px;
    bottom: 40px;

    width: 64px;
    height: 64px;
    background: var(--link-color);
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;

    &:hover {
      background: var(--link-color-hover);
    }
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .map-popup .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: var(--link-color);
    box-shadow: var(--link-box-shadow);
    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`

export const SideBar = styled.aside`
  width: 440px;
  background: var(--primary);
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header {
    > h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }

    > p {
      line-height: 28px;
      margin-top: 24px;
    }
  }

  > footer {
    display: flex;
    flex-direction: column;

    line-height: 24px;

    > strong {
      margin-top: 10px;
      font-weight: 800;
    }

    > span {
      margin-bottom: 30px;
    }

    .backToMenu {
      width: 64px;
      height: 64px;
      background: #ffd666;
      border-radius: 20px;

      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 0.2s;

      &:hover {
        background: var(--link-color-hover);
      }
    }
  }
`

const iconCSS = css`
  size: 32;
  color: white;
`

export const PlusIcon = styled(FiPlus)`
  ${iconCSS}
`

export const ArrowIcon = styled(FiArrowLeft)`
  size: 26;
  color: rgba(0, 0, 0, 0.6);
`
export const ArrowIconRight = styled(FiArrowRight)`
  ${iconCSS}
`
