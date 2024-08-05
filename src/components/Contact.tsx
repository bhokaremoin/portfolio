import React from 'react'

const Contact = React.forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="contact" className="bg-gray-100">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-lg">Feel free to reach out to me at: example@email.com</p>
        </section>
    )
})

Contact.displayName = 'Contact'
export default Contact