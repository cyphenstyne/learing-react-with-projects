import './Card.css'

function Card() {
    return (
        <div className="card">
            {/* Top Section: Logo and Save Button */}
            <div className="top">
                <div className="logo-container">
                    <img 
                        className='company_logo' 
                        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" 
                        alt="Airbnb Logo" 
                    />
                </div>
                <button className='save_button'>
                    Save
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2ttYXJrLWljb24gbHVjaWRlLWJvb2ttYXJrIj48cGF0aCBkPSJNMTcgM2EyIDIgMCAwIDEgMiAydjE1YTEgMSAwIDAgMS0xLjQ5Ni44NjhsLTQuNTEyLTIuNTc4YTIgMiAwIDAgMC0xLjk4NCAwbC00LjUxMiAyLjU3OEExIDEgMCAwIDEgNSAyMFY1YTIgMiAwIDAgMSAyLTJ6Ii8+PC9zdmc+" alt="bookmark" />
                </button>
            </div>

            {/* Middle Section: Job Info */}
            <div className="mid">
                <div className="company-info">
                    <span className="company-name">Airbnb</span>
                    <span className="posted-time">5 days ago</span>
                </div>
                <h2 className="job-role">Junior UI/UX Designer</h2>
                
                <div className="tags">
                    <span className="tag">Contract</span>
                    <span className="tag">Remote</span>
                </div>
            </div>

            {/* Divider Line */}
            <div className="divider"></div>

            {/* Bottom Section: Price and Apply */}
            <div className="bottom">
                <div className="salary-info">
                    <div className="amount">$100/hr</div>
                    <div className="location">Delhi, India</div>
                </div>
                <button className="apply_button">Apply now</button>
            </div>
        </div>
    )
}

export default Card