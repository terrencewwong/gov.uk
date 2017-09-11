import defaults from './defaults.json'

const spacing = type => ({ theme = {}, top, right, bottom, left }) => {
  if (!top && !right && !bottom && !left) return ''

  const gridSize = theme.gridSize || defaults.gridSize
  const unit = theme.unit || defaults.unit
  const values = [ top, right, bottom, left ]
    .map(value => value ? `${value * gridSize}${unit}` : 0)
    .join(' ')

  return `${type}: ${values};`
}

export const padding = spacing('padding')
export const margin = spacing('margin')
