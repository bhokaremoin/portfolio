import React from 'react'

const Projects = React.forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="projects" className="bg-white">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <ul className="list-disc pl-5">
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
            </ul>
        </section>
    )
})

Projects.displayName = 'Projects'
export default Projects