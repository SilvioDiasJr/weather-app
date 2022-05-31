import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { useTheme } from 'styled-components'

import { selectWeatherIcon } from '@utils/selectWeatherIcon'
import { WeatherCurrentDTO } from '@dtos/weatherDTO'
import { formatDate } from '@utils/formatDate'
import { api } from '@services/api'

import { Button } from '@components/Form/Button'

import {
  CloseIcon,
  Container,
  CurrentDay,
  CurrentLocation,
  Header,
  InputSearch,
  LocationIcon,
  MyLocationIcon,
  SearchContainer,
  SearchIcon,
  WeatherCondition,
  WeatherInformation
} from './styles'

interface ICoordinates {
  lon: number
  lat: number
}

interface Props {
  onCoordinates(value: ICoordinates): void
}

export const CurrentWeather: React.FC<Props> = ({ onCoordinates }) => {
  const [currentWeather, setCurrentWeather] = useState<WeatherCurrentDTO>()
  const [coordinates, setCoordinates] = useState({
    lon: -49.0681,
    lat: -22.3214
  })
  const [loading, setLoading] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement | null>(null)

  const { COLORS } = useTheme()

  const [isSearch, setIsSearch] = useState(false)

  async function handleSearch() {
    if (inputRef.current!.value.length < 3) {
      return
    }

    try {
      setLoading(true)

      const response = await api.get<WeatherCurrentDTO>(
        // eslint-disable-next-line prettier/prettier
        `weather?q=${inputRef.current!.value}&lang=pt_br&units=metric&appid=${process.env.API_KEY_OPEN_WEATHER
        }`
      )
      setCurrentWeather(response.data)
      onCoordinates({
        lat: response.data.coord.lat,
        lon: response.data.coord.lon
      })
      setIsSearch(false)
      inputRef.current!.value = ''
    } catch (error) {
      // console.log(error.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  function getUserCurrentCoordinates() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({
        lon: coords.longitude,
        lat: coords.latitude
      })
    })
  }

  async function getCurrentWeatherByCoordinates() {
    try {
      const response = await api.get<WeatherCurrentDTO>(
        `weather?lat=${coordinates.lat}&lon=${coordinates.lon}&lang=pt_br&units=metric&appid=${process.env.API_KEY_OPEN_WEATHER}`
      )
      setCurrentWeather(response.data)
    } catch (error: unknown) {
      // console.log(error.response.data.message)
    }
  }

  useEffect(() => {
    getCurrentWeatherByCoordinates()
    onCoordinates(coordinates)
  }, [coordinates])

  useLayoutEffect(() => {
    getUserCurrentCoordinates()
  }, [])

  return (
    <Container>
      <Header>
        <button type="button" onClick={() => setIsSearch(true)}>
          Search for places
        </button>
        <button type="button" onClick={getUserCurrentCoordinates}>
          <MyLocationIcon />
        </button>
      </Header>

      <WeatherCondition>
        <div></div>
        <img
          src={
            currentWeather && selectWeatherIcon(currentWeather?.weather[0].icon)
          }
          alt={`Imagem com a condição atual do tempo ${currentWeather?.weather[0].description}.`}
        />
      </WeatherCondition>

      <WeatherInformation>
        <h1>
          {currentWeather && Math.floor(currentWeather?.main.temp)}
          <span>°C</span>
        </h1>

        <h2>{currentWeather?.weather[0].description}</h2>

        <div>
          <CurrentDay>
            <p>Hoje</p>
            <span></span>
            <p>{currentWeather && formatDate(currentWeather?.dt)}</p>
          </CurrentDay>

          <CurrentLocation>
            <LocationIcon />
            <p>{currentWeather?.name}</p>
          </CurrentLocation>
        </div>
      </WeatherInformation>

      <SearchContainer active={isSearch}>
        <div>
          <CloseIcon onClick={() => setIsSearch(false)} />
        </div>

        <InputSearch>
          <div>
            <SearchIcon />
            <input type="search" ref={inputRef} placeholder="search location" />
          </div>
          <Button
            type="button"
            style={{
              width: '8.6rem',
              height: '4.8rem',
              backgroundColor: COLORS.brand.blue
            }}
            loading={loading}
            onClick={handleSearch}
          >
            Search
          </Button>
        </InputSearch>
      </SearchContainer>
    </Container>
  )
}
