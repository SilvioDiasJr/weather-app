import React from 'react'

import { IWeatherTodaysHighlightDTO } from '@dtos/weatherDTO'

import { Container, MeasuringMeter } from './styles'

interface Props {
  data: IWeatherTodaysHighlightDTO | undefined
}

export const Humidity: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <h1>Umidade</h1>

      <div>
        <span>{data?.humidity && Math.floor(data.humidity)}</span>
        <span>%</span>
      </div>

      <div>
        <div>
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
        <MeasuringMeter humidity={data?.humidity}>
          <div></div>
        </MeasuringMeter>
      </div>
    </Container>
  )
}
