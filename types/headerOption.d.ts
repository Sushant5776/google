import React, { JSXElementConstructor } from 'react'

interface HeaderOptionProps {
  Icon: JSXElementConstructor<React.ComponentProps<'svg'>>
  title: string
  selected?: boolean
}
