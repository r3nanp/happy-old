import styled from 'styled-components'
import { FiPlus } from 'react-icons/fi'
import { FiArrowLeft } from 'react-icons/fi'

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
    background: #15c3d6;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;

    &:hover {
      background: #17d6db;
    }
  }
`

export const SideBar = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
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
      background: #17d6db;
    }
    }
  }
`

export const PlusIcon = styled(FiPlus)`
  size: 32;
  color: white;
`

export const ArrowIcon = styled(FiArrowLeft)`
  size: 26;
  color: rgba(0, 0, 0, 0.6);
`
