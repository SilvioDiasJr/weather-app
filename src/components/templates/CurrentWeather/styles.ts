import styled from 'styled-components'

import { MdClose, MdLocationPin, MdMyLocation, MdSearch } from 'react-icons/md'

import cloudImg from '@assets/cloud-background.png'

interface SearchContainerProps {
  active: boolean
}

export const Container = styled.aside`
  position: relative;
  min-width: 45.9rem;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.shape.card_background};
`

export const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 4.2rem 4.6rem 0;
  margin-bottom: 6rem;

  button {
    border: 0;

    cursor: pointer;

    background-color: ${({ theme }) => theme.COLORS.brand.button_background};
  }

  button:nth-child(1) {
    width: 16.1rem;
    height: 4rem;

    color: ${({ theme }) => theme.COLORS.text.heading};
    font-size: 1.6rem;
    font-weight: 500;
  }

  button:last-child {
    width: 4rem;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
  }
`

export const MyLocationIcon = styled(MdMyLocation)`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.COLORS.text.heading};
`

export const LocationIcon = styled(MdLocationPin)`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.COLORS.text.info};
`

export const WeatherCondition = styled.div`
  position: relative;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    position: absolute;
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    background-image: url(${cloudImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.2;
  }

  img {
    margin: 0 auto;
    object-fit: cover;

    z-index: 1;
  }
`

export const WeatherInformation = styled.div`
  flex: 2;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  > h1 {
    font-size: 14.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.text.heading};

    text-align: center;

    > span {
      font-size: 4.8rem;
      font-weight: 100;
      color: ${({ theme }) => theme.COLORS.text.body};
    }
  }

  > h2 {
    font-size: 3.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.text.body};

    text-align: center;
  }
`

export const CurrentDay = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 3.2rem;
  p {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.text.info};

    text-align: center;

    text-transform: capitalize;
  }

  span {
    width: 4px;
    height: 4px;

    display: block;

    border-radius: 50%;

    margin: 0 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.text.info};
  }
`

export const CurrentLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.text.info};

    text-align: center;
  }
`

export const SearchContainer = styled.div<SearchContainerProps>`
  position: absolute;
  width: 100%;
  height: 100%;

  transition: 0.5s all;
  left: ${({ active }) => (active ? '0%' : '-100%')};

  z-index: 2;
  background-color: ${({ theme }) => theme.COLORS.shape.card_background};

  > div:first-child {
    width: 100%;

    display: flex;
    justify-content: flex-end;
  }
`

export const CloseIcon = styled(MdClose)`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.COLORS.text.heading};

  margin: 2rem 4.6rem 4.6rem;

  cursor: pointer;
`

export const InputSearch = styled.div`
  width: 100%;
  height: 4.8rem;

  display: flex;
  padding: 0 4.6rem;

  background-color: transparent;

  > div {
    flex: 1;
    height: 100%;

    display: flex;
    align-items: center;

    border: 1px solid ${({ theme }) => theme.COLORS.brand.border};

    margin-right: 1.2rem;

    &:focus-within {
      border-color: ${({ theme }) => theme.COLORS.brand.outline};
    }

    input[type='search'] {
      flex: 1;
      height: 100%;

      border: 0;
      padding: 1.6rem;

      outline: 0;

      font-size: 1.6rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.text.body};

      background-color: transparent;

      &::placeholder {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.text.placeholder};
      }
    }
  }
`

export const SearchIcon = styled(MdSearch)`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.COLORS.text.placeholder};

  margin: 1.6rem 0 1.6rem 1.6rem;
`
