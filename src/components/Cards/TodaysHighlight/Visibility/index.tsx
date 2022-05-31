import React from 'react'

import { IWeatherTodaysHighlightDTO } from '@dtos/weatherDTO'

import { Container } from './styles'

interface Props {
  data: IWeatherTodaysHighlightDTO | undefined
}

export const Visibility: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <h1>Visibilidade</h1>

      <div>
        <span>{data?.visibility && Math.floor(data.visibility / 1000)}</span>
        <span>km</span>
      </div>
    </Container>
  )
}
