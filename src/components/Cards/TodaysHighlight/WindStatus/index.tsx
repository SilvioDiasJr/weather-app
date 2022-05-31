import React from 'react'

import { IWeatherTodaysHighlightDTO } from '@dtos/weatherDTO'

import { Container, IconNavigation } from './styles'

interface Props {
  data: IWeatherTodaysHighlightDTO | undefined
}

export const WindStatus: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <h1>Status do vento</h1>

      <div>
        <span>{data?.wind_speed && Math.floor(data.wind_speed * 3.6)}</span>
        <span>km/h</span>
      </div>
      <IconNavigation deg={data?.wind_deg} />
    </Container>
  )
}
