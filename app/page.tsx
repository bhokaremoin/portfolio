import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'
import WorkExperience from '@/Components/WorkExperience'
import Projects from '@/Components/Projects'
import TechStack from '@/Components/TechStack'
import ContactUs from '@/Components/ContactUs'
import Footer from '@/Components/Footer'

export default function Home() {
    return (
        <main className="flex flex-col gap-4">
            <Navbar />
            <Hero />
            <WorkExperience />
            <Projects />
            <TechStack />
            <ContactUs />
            <Footer />
        </main>
    )
}
