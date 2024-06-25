import Navbar from "@/app/Components/Navbar";
import LandingPage from "@/app/Components/LandingPage";
import WorkExperience from "@/app/Components/WorkExperience";
import Projects from "@/app/Components/Projects";
import TechStack from "@/app/Components/TechStack";
import ContactUs from "@/app/Components/ContactUs";
import Footer from "@/app/Components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
        <Navbar />
        <LandingPage />
        <WorkExperience />
        <Projects />
        <TechStack />
        <ContactUs />
        <Footer />
    </main>
  );
}
