import styled, { keyframes } from 'styled-components'

import { MdNavigation } from 'react-icons/md'

interface MoistureMeterProps {
  humidity: number | undefined
}

export const Container = styled.div`
  width: 32.8rem;
  height: 20.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.COLORS.shape.card_background};

  > h1 {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.9rem;
    color: ${({ theme }) => theme.COLORS.text.heading};
    text-align: center;
  }

  > div {
    > span:nth-child(1) {
      font-size: 6.4rem;
      font-weight: 700;
      line-height: 7.5rem;
      color: ${({ theme }) => theme.COLORS.text.heading};
    }

    > span:nth-child(2) {
      font-size: 3.6rem;
      font-weight: 400;
      line-height: 4.2rem;
      color: ${({ theme }) => theme.COLORS.text.heading};
    }

    > div {
      display: flex;
      justify-content: space-between;

      margin-bottom: 0.2rem;
      > span {
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 1.4rem;
        color: ${({ theme }) => theme.COLORS.text.body};
      }
    }
  }
`

const humidityAnimate = (value: number | undefined) => keyframes`
  0% {
    width: 0%;
  } 100% {
    width: ${value}%;
  }
`

export const MeasuringMeter = styled.div<MoistureMeterProps>`
  width: 22.9rem;
  height: 0.8rem;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.text.heading};

  > div {
    width: ${({ humidity }) => humidity}%;
    height: 100%;

    border-radius: 8px;

    animation: ${({ humidity }) => humidityAnimate(humidity)} backwards 2s;

    background-color: ${({ theme }) => theme.COLORS.brand.yellow};
  }
`
