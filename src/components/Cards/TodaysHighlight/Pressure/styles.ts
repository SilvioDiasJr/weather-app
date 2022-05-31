import styled from 'styled-components'

export const Container = styled.div`
  width: 32.8rem;
  height: 15.9rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.COLORS.shape.card_background};

  > h1 {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.9rem;
    color: ${({ theme }) => theme.COLORS.text.heading};
    text-align: center;
  }

  > div {
    > span:nth-child(1) {
      font-size: 6.4rem;
      font-weight: 700;
      line-height: 7.5rem;
      color: ${({ theme }) => theme.COLORS.text.heading};
    }

    > span:nth-child(2) {
      font-size: 3.6rem;
      font-weight: 500;
      line-height: 4.2rem;
      color: ${({ theme }) => theme.COLORS.text.heading};
    }
  }
`
