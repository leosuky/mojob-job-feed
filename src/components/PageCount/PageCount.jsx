import React from 'react'
import './pagecount.css'

function PageCount({setPageCount}) {


    function handleChange(event) {
        setPageCount(event.target.value);
    }

  return (
    <div>
        <select 
            name="page"
            id="page" 
            className='select-page'
            onChange={handleChange}
        >
            <option value="5">5 PER PAGE</option>
            <option value="10">10 PER PAGE</option>
            <option value="15">15 PER PAGE</option>
            <option value="20">20 PER PAGE</option>
            <option value="25">25 PER PAGE</option>
            <option value="40">Display All</option>
      </select>
    </div>
  )
}

export default PageCount