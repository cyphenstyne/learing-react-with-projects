import './Card.css'

function Card(props) {
    console.log(props);
    
    return (
        <div className="card">
            
            <div className="top">
                <img className='company_logo' 
                    src= {props.company_logo} 
                    alt= {props.company_name}
                />
                
                <button className='save_button'>
                    Save
                    <img className='save_icon' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4YTg4ODgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2ttYXJrLWljb24gbHVjaWRlLWJvb2ttYXJrIj48cGF0aCBkPSJNMTcgM2EyIDIgMCAwIDEgMiAydjE1YTEgMSAwIDAgMS0xLjQ5Ni44NjhsLTQuNTEyLTIuNTc4YTIgMiAwIDAgMC0xLjk4NCAwbC00LjUxMiAyLjU3OEExIDEgMCAwIDEgNSAyMFY1YTIgMiAwIDAgMSAyLTJ6Ii8+PC9zdmc+" alt="" />
                </button>
            </div>

            <div className="middle">
                <div className="basic_info">
                    <span className='company_name'>{props.company_name}</span>
                    <span className='time_posted'>{props.posted_time}</span>
                </div>
                
                <h3 className='role'>{props.role}</h3>

                <div className="filter">
                    <div className="job_type">{props.job_type[0]}</div>
                    <div className="level">{props.job_type[1]}</div>
                </div>    
            </div>

            <div className="bottom">
                <hr className='divider'/>
                <div className="bottom-content">
                    <div className="salary-container">
                        <div className="salary">{props.salary}</div>
                        <div className="location">{props.location}</div>
                    </div>
                    <button className="apply-btn">Apply now</button>
                </div>
            </div>

        </div>
    )
}

export default Card