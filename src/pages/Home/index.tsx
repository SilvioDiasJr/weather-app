import React, { useState } from 'react'

import { IWeatherForecastRequestDTO } from '@dtos/weatherDTO'
import { api } from '@services/api'

import { CurrentWeather } from '@components/templates/CurrentWeather'
import { Cards } from '@components/Cards'

import {
  Container,
  Content,
  Footer,
  TodaysHighlight,
  WeatherForecast
} from './styles'

interface ICoordinates {
  lon: number
  lat: number
}

export const Home: React.FC = () => {
  const [weatherForecast, setWeatherForecast] =
    useState<IWeatherForecastRequestDTO>()

  async function getWeatherForecast(coordinates: ICoordinates) {
    try {
      const response = await api.get<IWeatherForecastRequestDTO>(
        `onecall?lat=${coordinates?.lat}&lon=${coordinates?.lon}&lang=pt_br&units=metric&appid=${process.env.API_KEY_OPEN_WEATHER}`
      )
      console.log(response.data)

      setWeatherForecast(response.data)
    } catch (error) {
      // console.log(error.response.data.message)
    }
  }

  return (
    <Container>
      <CurrentWeather onCoordinates={event => getWeatherForecast(event)} />
      <Content>
        <WeatherForecast>
          {weatherForecast?.daily.map((item, index) => {
            if (index >= 1 && index <= 5) {
              return <Cards.WeatherForecast data={{ index, ...item }} />
            }
          })}
        </WeatherForecast>

        <TodaysHighlight>
          <h1>Destaques de hoje</h1>
          <div>
            <Cards.WindStatus data={weatherForecast?.current} />
            <Cards.Humidity data={weatherForecast?.current} />
            <Cards.Visibility data={weatherForecast?.current} />
            <Cards.Pressure data={weatherForecast?.current} />
          </div>
        </TodaysHighlight>
      </Content>

      <Footer></Footer>
    </Container>
  )
}
