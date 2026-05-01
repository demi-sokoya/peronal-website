import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PlaylistSection from "./components/PlaylistSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import ResumeSection from "./components/ResumeSection";

function App() {
	return (
		<>
			<Header />
			<HeroSection />
			<ProjectsSection />
			<ResumeSection />
			<PlaylistSection />
			<ContactSection />
			<Footer />
		</>
	);
}

export default App;
