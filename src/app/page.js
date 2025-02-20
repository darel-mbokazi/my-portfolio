import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import EmailSection from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
