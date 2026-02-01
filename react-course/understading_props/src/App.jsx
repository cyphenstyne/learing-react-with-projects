import './App.css'
import Card from './components/Card.jsx'
import job_data from './dummy_data.json'

function App() {
  return (
    <>
      <div className="parent">
        {job_data.map(function (job, idx) {
            console.log(idx);
            
            return (
            <div key={idx}>
                <Card 
                company_name = {job.company_name}
                company_logo = {job.company_logo}
                role = {job.role}
                posted_time = {job.posted_time}
                job_type = {job.job_type}
                salary = {job.salary}
                location = {job.location}      
            />
            </div>)
            
                
        })}
      </div>
    </>
  )
}

export default App
