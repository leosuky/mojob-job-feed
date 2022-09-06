import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Header } from './components';

import { Filters, JobList, Error } from './containers';

function App() {
  const [pagecount, setPageCount] = useState('5')
  const [filterposition, setFilterposition] = useState('')
  const [jobs, setJobs] = useState([])

  useEffect( () => {
    const fetchJobs = async () => {
        const response = await axios.get(
          `https://test-api.mojob.io/public/job/listings/?include_open=False&page=1&page_size=${pagecount}
          &position_functions=${filterposition}&use_mojob_feed_filter=True&use_pagination=True`
        )
        const {results} = response.data
        setJobs(results);
    };

    fetchJobs();
  },[filterposition, pagecount])

  
  return (
    <div className="App">
      <Header/>
      <div className='App__body'>

        <Filters 
          setFilterposition={setFilterposition}
          setPageCount={setPageCount} 
        />
        {jobs.length > 0 ? <JobList jobs={jobs}/> : <Error/>}

      </div>
      
    </div>
  );
}

export default App;
