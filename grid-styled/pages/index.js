import React from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { Flex, Box, Grid } from 'grid-styled'
import { Provider, Text as T, Link as L } from 'rebass'
import { SearchInput } from '../components/input'

const unit = 10

injectGlobal`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
`
const ResponsiveBackground = styled(Grid)`
  @media screen and (min-width: 48em) {
    height: calc(100% - 5px);
    background-color: black;
  }
`

const theme = {
  breakpoints: [48],
  fontSizes: [12, 14, 16, 19, 32, 48],
  font: 'Arial',
  colors: {
    white: 'white',
    blue: '#005ea5'
  }
}

const BlueContainer = styled(Flex)`
  background-color: ${theme.colors.blue};
`

const MaxWidth = styled(Box)`
  max-width: 1020px;
  width: 1020px;
`

const line = ({ l }) => {
  if (!l) return ''
  l = l instanceof Array ? l : [ l ]

  return l.map((size, index) => {
    const lineHeight = `line-height: ${size};`
    const brk = theme.breakpoints[index - 1]
    if (!brk) return lineHeight

    return `@media screen and (min-width: ${brk}em) {
      ${lineHeight}
    }`
  }).join('')
}

const Text = styled(T)([], line)
const Link = styled(L)`
  display: block;
  font-weight: bold;
  ${line}
`

export default () => (
  <Provider theme={theme}>
    <BlueContainer justify='center'>
      <MaxWidth pt='25px' pl='20px' pr='20px'>
        <Grid
          width={[
            1,
            7/10
          ]}
          pr={[0, '30px']}
        >
          <Text
            color='white'
            f={[4, 5]}
            l={['35px', '50px']}
            mb='15px'
            bold
          >
            Welcome to GOV.UK
          </Text>
          <Text
            color='white'
            f={[2, 3]}
            l={['20px', '25px']}
          >
            The best place to find government services and information
          </Text>
          <Text
            color='white'
            f={[2, 3]}
            l={['20px', '25px']}
            mb='20px'
            bold
          >
            Simpler, clearer, faster
          </Text>
          <SearchInput mb='30px'/>
        </Grid>
        <ResponsiveBackground
          width={[
            1,
            3/10
          ]}
          mt={[0, '5px']}
          p={['0 0 20px 0', '20px']}
        >
          <Text mb={['5px', '10px']} color='white' f={[0, 1]} l={['15px', '20px']}>Popular on GOV.UK</Text>
          <Link href='#' color='white' f={[1, 2]} l={['20px', '25px']}>Universal Jobmatch job search</Link>
          <Link href='#' color='white' f={[1, 2]} l={['20px', '25px']}>Renew vehicle tax</Link>
          <Link href='#' color='white' f={[1, 2]} l={['20px', '25px']}>Log in to student finance</Link>
          <Link href='#' color='white' f={[1, 2]} l={['20px', '25px']}>Book your theory test</Link>
          <Link href='#' color='white' f={[1, 2]} l={['20px', '25px']}>Personal tax account</Link>
        </ResponsiveBackground>
      </MaxWidth>
    </BlueContainer>
  </Provider>
)
