import React from 'react'
import './filters.css'

import { PositionFilter, PageCount } from '../../components'

function Filters({setFilterposition, setPageCount}) {
  return (
    <div className='filters'>
        <div className="filters__position">
          <PositionFilter setFilterposition={setFilterposition}/>
        </div>

        <div className="filters__pagecount">
          <PageCount setPageCount={setPageCount}/>
        </div>
    </div>
  )
}

export default Filters