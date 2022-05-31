export interface WeatherCurrentDTO {
  name: string
  dt: number
  coord: {
    lat: number
    lon: number
  }
  weather: {
    icon: string
    main: string
    description: string
  }[]
  main: {
    humidity: number
    pressure: number
    temp: number
  }
  wind: {
    speed: number
    deg: number
  }
}

export interface IWeatherForecastRequestDTO {
  current: {
    humidity: number
    pressure: number
    visibility: number
    wind_deg: number
    wind_speed: number
  }
  daily: {
    dt: number
    weather: {
      icon: string
      description: string
    }[]
    temp: {
      min: number
      max: number
    }
  }[]
}

export interface IWeatherForecastDTO {
  index: number
  dt: number
  weather: {
    icon: string
    description: string
  }[]
  temp: {
    min: number
    max: number
  }
}

export interface IWeatherTodaysHighlightDTO {
  humidity: number
  pressure: number
  visibility: number
  wind_deg: number
  wind_speed: number
}
