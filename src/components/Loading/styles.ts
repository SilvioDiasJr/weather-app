import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  width: 2rem;
  height: 2rem;

  border: 1px solid ${({ theme }) => theme.COLORS.text.heading};
  border-top: 1px solid transparent;
  border-radius: 50%;
  animation: ${animation} 1.5s linear infinite;
`
