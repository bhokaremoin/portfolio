import React from 'react'

const Profile = React.forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="profile" className="bg-gray-100">
            <h2 className="text-3xl font-bold mb-4">Profile</h2>
            <p className="text-lg">Welcome to my portfolio! Im a web developer passionate about creating amazing experiences.</p>
        </section>
    )
})

Profile.displayName = 'Profile'
export default Profile
