import React from 'react'
import styled from 'styled-components'
import defaults from './defaults.json'

const font = ({ theme = {}, size }) => {
  return theme.fonts && theme.fonts[size] || defaults.fonts[size]
}

const Text = styled.p`
  margin: 0;
  ${font}
  ${props => props.bold && `font-weight: bold;`}
`

export default Text
