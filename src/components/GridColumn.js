import React from 'react'
import { keyGenerator } from '.'

const GridColumn = ({ field, title, data, ...props }) => {
  console.log(data)
  return (
    <React.Fragment>
      <span>{title}</span>
      {data.map(item => <span key={keyGenerator()}>{String(item[field]) === 'undefined' ? '&nbsp;' : String(item[field])}</span>)}
    </React.Fragment>
  )
}

export default GridColumn