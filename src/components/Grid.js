import React from 'react'
import GridColumn from './GridColumn'

const Grid = ({data}) => {
  return (
    data.map(item => <GridColumn></GridColumn>)
  )
}

export default Grid