import React from 'react'
import { render } from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import ContentBox from '../src/content-box'
import Container from '../src/container'
import Text from '../src/text'
import Spacer from '../src/spacer'

const theme = {
  gridSize: 10,
  colors: {
    blue: '#005ea5'
  },
  fonts: {
    md: `
      font-size: 19px;
      line-height: 25px;
    `,
    xlg: `
      font-size: 48px;
      line-height: 50px;
      font-weight: bold;
    `
  }
}

const meta = document.createElement('meta')
meta.name = 'viewport'
meta.content = 'content="width=device-width, initial-scale=1"'
document.head.appendChild(meta)

const root = document.createElement('div')
document.body.appendChild(root)
document.body.style.margin = 0

const StyleCascader = styled.div`
  font-family: Arial;
  color: white;
  -webkit-font-smoothing: antialiased;
`

render(
  (
    <ThemeProvider theme={theme}>
      <StyleCascader>
        <ContentBox bg='blue' limit='1020px' top={2.5} left={2} right={2}>
          <Spacer bottom={1.5}>
            <Text size='xlg'>
              Welcome to GOV.UK
            </Text>
          </Spacer>
          <Text size='md'>
            The best place to find government services and information
          </Text>
          <Spacer bottom={3}>
            <Text size='md' bold>
              Simpler, clearer, faster
            </Text>
          </Spacer>
        </ContentBox>
      </StyleCascader>
    </ThemeProvider>
  ),
  root
)
