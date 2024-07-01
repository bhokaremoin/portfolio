import React from 'react'

const Navbar: React.FC = () => {
    const options = [
        { id: 'experience', text: 'Experience' },
        { id: 'technologies', text: 'Technologies' },
        { id: 'projects', text: 'Projects' },
        { id: 'education', text: 'Education' },
        { id: 'resume', text: 'Resume' },
        { id: 'blogs', text: 'Blogs' },
    ]
    return (
        <div className={'flex flex-row justify-between'}>
            <div>Moin</div>
            <div className={'flex flex-row gap-4'}>
                {options.map((option, index) => {
                    return <div key={index}>{option.text}</div>
                })}
            </div>
        </div>
    )
}

export default Navbar
