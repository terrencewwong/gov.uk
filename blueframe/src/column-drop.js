import React from 'react'
import styled from 'styled-components'

const ColumnDrop = ({ reverse, breakpoint, primary, secondary }) => {
  if (primary.width && secondary.width) {
    throw new Error('width may only be defined in one of primary or secondary')
  }

  return <Wrapper breakpoint={breakpoint}>
    <Column
      reverse={reverse}
      breakpoint={breakpoint}
      width={primary.width}
      beforeBreak={primary.beforeBreak}
      afterBreak={primary.afterBreak}
    >
      {primary.content()}
    </Column>
    <Column
      reverse={reverse}
      breakpoint={breakpoint}
      width={secondary.width}
      beforeBreak={secondary.beforeBreak}
      afterBreak={secondary.afterBreak}
    >
      {secondary.content()}
    </Column>
  </Wrapper>
}

ColumnDrop.defaultProps = {
  reverse: false,
  breakpoint: 'tablet'
}

