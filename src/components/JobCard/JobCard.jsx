import React from 'react'
import './jobcard.css'

function JobCard({title, company, position, dueDate}) {
  return (
    <div className='jobcard'>
        <div className="jobcard__title">
            <h3>{title}</h3>
        </div>
        <div className="jobcard__subtexts">
            <p>{company}</p>
            <div></div>
            <p>{position}</p>
            <div></div>
            <p>{dueDate}</p>
        </div>
    </div>
  )
}

export default JobCard