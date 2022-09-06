import React from 'react'
import './joblist.css'

import { JobCard } from '../../components'

function JobList({jobs}) {
  return (
    <div className='joblist'>
        {
            jobs.map(item => (
                <JobCard
                    key={item.id}
                    title={item.job.title}
                    company={item.job.unit.name}
                    position={item.job.position_function.name_en}
                    dueDate={`${new Date(item.job.due_date.split('.')[0])}`}
                />
            ))
        }
    </div>
  )
}

export default JobList