import React from 'react'

import { IWeatherForecastDTO } from '@dtos/weatherDTO'
import { formatDate } from '@utils/formatDate'
import { selectWeatherIcon } from '@utils/selectWeatherIcon'

import { Container } from './styles'

interface Props {
  data: IWeatherForecastDTO
}

export const WeatherForecast: React.FC<Props> = ({ data }) => {
  return (
    <Container title={data.weather[0].description}>
      <h1>{data.index === 1 ? 'Amanhã' : formatDate(data.dt)}</h1>
      <img
        src={selectWeatherIcon(data.weather[0].icon)}
        alt={`Imagem com a condição atual do tempo ${data.weather[0].description}.`}
      />
      <div>
        <span>{Math.floor(data.temp.max)}°C</span>
        <span>{Math.floor(data.temp.min)}°C</span>
      </div>
    </Container>
  )
}
