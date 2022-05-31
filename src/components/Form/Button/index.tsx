import React, { ButtonHTMLAttributes } from 'react'

import { Loading } from '@components/Loading'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

export const Button: React.FC<Props> = ({ children, loading, ...rest }) => {
  return (
    <Container loading={loading} {...rest}>
      {loading ? <Loading /> : children}
    </Container>
  )
}
