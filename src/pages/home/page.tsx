import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import HowItWorksSection from './components/HowItWorksSection';
import DemoSection from './components/DemoSection';
import DifferentSection from './components/DifferentSection';
import RoadmapSection from './components/RoadmapSection';
import TechStackSection from './components/TechStackSection';
import HackathonTracksSection from './components/HackathonTracksSection';
import TeamSection from './components/TeamSection';
import CommunitySection from './components/CommunitySection';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <StorySection />
        <HowItWorksSection />
        <DemoSection />
        <DifferentSection />
        <RoadmapSection />
        <TechStackSection />
        <HackathonTracksSection />
        <TeamSection />
        <CommunitySection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
