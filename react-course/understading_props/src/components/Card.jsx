import './Card.css'

function Card() {
    return(
        <div className="card">

            <div className="top">
                <img className='amazon_icon' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F019%2F136%2F322%2Foriginal%2Famazon-logo-amazon-icon-free-free-vector.jpg&f=1&nofb=1&ipt=afac27417191f6c123bec0092918bccf88adcf85d2b9edbbfd5a488fc4f229d4" alt="" />
                <button>Save <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2ttYXJrLWljb24gbHVjaWRlLWJvb2ttYXJrIj48cGF0aCBkPSJNMTcgM2EyIDIgMCAwIDEgMiAydjE1YTEgMSAwIDAgMS0xLjQ5Ni44NjhsLTQuNTEyLTIuNTc4YTIgMiAwIDAgMC0xLjk4NCAwbC00LjUxMiAyLjU3OEExIDEgMCAwIDEgNSAyMFY1YTIgMiAwIDAgMSAyLTJ6Ii8+PC9zdmc+" alt="" /></button>
            </div>

            <div className="mid"></div>
            <div className="bottom"></div>
        </div>
    )
}

export default Card
