import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
const unit = 10
const searchIconUrl = 'https://image.flaticon.com/icons/png/128/49/49116.png'

export const Input = styled.input`
  box-sizing: border-box;
  border: none;
  padding-left: ${unit * 1.5}px;
  padding-right: ${unit * 1.5}px;
  display: block;
  width: 100%;
  height: ${4 * unit}px;
  font-size: 19px;

  :focus {
    outline: none;
  }
`

export const Button = styled.button`
  height: ${4 * unit}px;
  margin: 0;
  border: none;
  padding: ${unit}px;
  cursor: pointer;
  background: white;
`

export const SearchInput = (props) => (
  <Flex {...props}>
    <Box flex={1}>
      <Input type='text' placeholder='Search GOV.UK' />
    </Box>
    <Button><img width='20px' height='20px' src={searchIconUrl} alt="search" /></Button>
  </Flex>
)
