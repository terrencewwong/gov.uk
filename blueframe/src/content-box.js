import React from 'react'
import styled from 'styled-components'
import defaults from './defaults.json'
import { BareContainer } from './container'

const Centerer = styled(BareContainer)`
  display: flex;
  justify-content: center;
`

const ContentContainer = styled(BareContainer)`
  width: 100%;
  max-width: ${props => props.limit};
`

const ContentBox = ({ children, bg, ...rest }) => {
  return (
    <Centerer bg={bg}>
      <ContentContainer {...rest}>
        {children}
      </ContentContainer>
    </Centerer>
  )
}

export default ContentBox
