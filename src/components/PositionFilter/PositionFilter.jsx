import React from 'react'
import './positionfilter.css'

import axios from 'axios'


function PositionFilter({setFilterposition}) {
  const [positions, setPositions] = React.useState([])

  function handleChange(event) {
    setFilterposition(event.target.value);
  }

  React.useEffect( () => {
    const fetchPositions = async () => {
        const response = await axios.get(
          'https://test-api.mojob.io/public/job/parent-position-functions/?page_size=85'
        )
        const {results} = response.data
        setPositions(results);
    };

    fetchPositions();
  },[])


  return (
    <div>
      <select 
          name="position" 
          id="position" 
          className='select-position'
          onChange={handleChange}
      >
        <option value="">FILTER BY POSITION</option>
        {
          positions.map(item => (
            <option value={item.id} key={item.id}>{item.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default PositionFilter