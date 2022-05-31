import styled from 'styled-components'

import { MdNavigation } from 'react-icons/md'

interface IconNavigationProps {
  deg: number | undefined
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
      font-weight: 500;
      line-height: 3.6rem;
      color: ${({ theme }) => theme.COLORS.text.heading};
    }
  }

  > div:last-child {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > span {
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      font-weight: 700;
      line-height: 1.4rem;
      color: ${({ theme }) => theme.COLORS.text.body};
    }
  }
`

export const IconNavigation = styled(MdNavigation)<IconNavigationProps>`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.text.heading};

  transform: rotate(${({ deg }) => deg}deg);
  transition: transform 2s;

  margin: 1rem;
`
