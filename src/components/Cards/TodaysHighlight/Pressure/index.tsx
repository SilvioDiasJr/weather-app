import React from 'react'

import { IWeatherTodaysHighlightDTO } from '@dtos/weatherDTO'

import { Container } from './styles'

interface Props {
  data: IWeatherTodaysHighlightDTO | undefined
}

export const Pressure: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <h1>Pressão</h1>

      <div>
        <span>{data?.pressure}</span>
        <span>mb</span>
      </div>
    </Container>
  )
}
