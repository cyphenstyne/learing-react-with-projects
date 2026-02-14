function Profiles(params) {
  
  const profiles = [1,2,3,4,5]

  return(
    <div className='bg-black text-amber-50 h-screen'>
      {
        profiles.map(
          (profile) => (
            <Link key = {profile} to = {`/profiles/${profile}`}>
              profile {profile}
            </Link>
          )
        )
      }
    </div>
  )
}
export default Profiles