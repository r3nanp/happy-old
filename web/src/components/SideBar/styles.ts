import styled, { css } from 'styled-components'
import { FiArrowLeft } from 'react-icons/fi'

export const Container = styled.div``

const buttonsCSS = css`
  width: 48px;
  height: 48px;

  border: 0;

  background: #12afcb;
  border-radius: 16px;

  cursor: pointer;

  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #17d6eb;
  }
`

export const LeftBar = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: var(--primary);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 48px;
  }

  > footer {
    > a {
      ${buttonsCSS}
    }

    > button {
      ${buttonsCSS}
    }
  }
`
export const ArrowIcon = styled(FiArrowLeft)`
  size: 24;
  color: #FFF;
`
