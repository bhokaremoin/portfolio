import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold">
                            My Portfolio
                        </Link>
                    </div>
                    <div className="flex">
                        <Link href="#profile" className="px-3 py-2 rounded-md text-sm font-medium">
                            Profile
                        </Link>
                        <Link href="#projects" className="px-3 py-2 rounded-md text-sm font-medium">
                            Projects
                        </Link>
                        <Link href="#contact" className="px-3 py-2 rounded-md text-sm font-medium">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar