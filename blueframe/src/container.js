import React from 'react'
import styled from 'styled-components'
import { padding } from './style-utils'
import defaults from './defaults.json'

const dimensions = ({
  theme = {},
  size,
  'preferred-width': preferredWidth,
  width
}) => {
  if (size === 'viewport') {
    return 'width: 100vw; height: 100vh;'
  } else if (size === 'fill') {
    return 'width: 100%; height: 100%;'
  } else if (preferredWidth) {
    return `
      width: ${preferredWidth};
      max-width: ${preferredWidth};
    `
  }

  width = width || theme.sizes && theme.sizes[size] || defaults.sizes[size]
  return width ? `width: ${width};`: ''
}

const background = ({ theme = {}, bg }) => {
  if (!bg) return ''

  const color = theme.colors && theme.colors[bg] || bg
  return `background-color: ${color};`
}

const centering = props => {
  let rules = ''
  const centerHorizontal = props['center-horizontal']
  const centerVertical = props['center-vertical']

  if (centerHorizontal) {
    rules += 'justify-content: center;'
  }

  if (centerVertical) {
    rules += 'align-items: center;'
  }

  return rules
}

export const BareContainer = styled.div`
  box-sizing: border-box;
  ${padding}
  ${background}
  ${props => props.additionalCSS}
`

const OuterContainer = styled(BareContainer)`
  display: flex;
  ${dimensions}
  ${centering}
`

const CenteredText = styled.div`
  text-align: center;
`

const PlainDiv = ({ children }) => <div>{children}</div>

const Container = ({
  children,
  'center-text': centerText,
  ...rest
}) => {
  const InnerContainer = centerText ? CenteredText : PlainDiv

  return (
    <OuterContainer {...rest}>
      <InnerContainer>
        {children}
      </InnerContainer>
    </OuterContainer>
  )
}

export default Container
