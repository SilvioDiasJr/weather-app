import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`

export const Content = styled.div`
  width: calc(100% - 17.7rem);

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 4rem;
`

export const WeatherForecast = styled.section`
  max-width: 710px;
  height: auto;

  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  gap: 2.6rem;

  margin-bottom: 7.2rem;
`

export const TodaysHighlight = styled.section`
  max-width: 710px;
  margin: 0 auto;

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.text.heading};

    margin-bottom: 3.2rem;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.8rem;

    margin-bottom: 2.6rem;
  }
`

export const Footer = styled.footer``
