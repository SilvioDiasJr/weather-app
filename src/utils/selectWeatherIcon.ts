import clearDayIcon from '@assets/clear-day.svg'
import clearNightIcon from '@assets/clear-night.svg'
import partlyCloudyDayIcon from '@assets/partly-cloudy-day.svg'
import partlyCloudyNightIcon from '@assets/partly-cloudy-night.svg'
import cloudyIcon from '@assets/cloudy.svg'
import overcastIcon from '@assets/overcast.svg'
import heavyShowersIcon from '@assets/heavy-showers.svg'
import showersIcon from '@assets/showers.svg'
import thunderstormShowersIcon from '@assets/thunderstorm-showers.svg'
import snowIcon from '@assets/snow.svg'
import fogIcon from '@assets/fog.svg'

export function selectWeatherIcon(key: string) {
  switch (key) {
    case '01d':
      return clearDayIcon

    case '01n':
      return clearNightIcon

    case '02d':
      return partlyCloudyDayIcon

    case '02n':
      return partlyCloudyNightIcon

    case '03d':
      return cloudyIcon

    case '03n':
      return cloudyIcon

    case '04d':
      return overcastIcon

    case '04n':
      return overcastIcon

    case '09d':
      return heavyShowersIcon

    case '09n':
      return heavyShowersIcon

    case '10d':
      return showersIcon

    case '10n':
      return showersIcon

    case '11d':
      return thunderstormShowersIcon

    case '11n':
      return thunderstormShowersIcon

    case '13d':
      return snowIcon

    case '13n':
      return snowIcon

    case '50d':
      return fogIcon

    case '50n':
      return fogIcon
  }
}
