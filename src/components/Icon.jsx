import React from 'react'
import { Icons } from '../utils/icons'

function Icon({ name, className }) {
  const IconComponent = Icons[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" does not exist.`)
    return null
  }

  return <IconComponent className={className} />
}

export default Icon
