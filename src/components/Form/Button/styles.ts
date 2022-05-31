import styled from 'styled-components'

interface ContainerProps {
  loading?: boolean
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;

  color: ${({ theme }) => theme.COLORS.text.heading};
  font-size: 1.6rem;
  font-weight: 600;

  cursor: pointer;

  background-color: ${({ theme }) => theme.COLORS.brand.button_background};

  &:disabled {
    cursor: not-allowed;
  }
`
