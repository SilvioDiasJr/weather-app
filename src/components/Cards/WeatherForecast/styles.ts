import styled from 'styled-components'

export const Container = styled.div`
  width: 12rem;
  height: 17.7rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 1.8rem;

  background-color: ${({ theme }) => theme.COLORS.shape.card_background};

  h1 {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.text.heading};

    text-align: center;
  }

  img {
    width: 5.6rem;
    object-fit: fill;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.text.heading};
    }

    span:nth-child(2) {
      color: ${({ theme }) => theme.COLORS.text.body};
    }
  }
`
