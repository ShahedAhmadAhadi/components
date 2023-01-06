import React from 'react'
import { keyGenerator, ObjectAllKeys } from '.';
import GridColumn from './GridColumn'

const Grid = ({data}) => {
  let keys = ObjectAllKeys(data);
  console.log(keys)
  return (
    <React.Fragment>
      <div className={`grid grid-cols-5`}>
        {keys.map(title => <div key={keyGenerator()} className={`flex flex-col`}><GridColumn className={'column'} field={title} title={title} data={data}></GridColumn></div>)}
      </div>

    </React.Fragment>
  )
}

export default Grid