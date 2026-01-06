import Hero from './sections/Hero';
import About from './sections/About';
import Research from './sections/Research';
import Teaching from './sections/Teaching';
import Contact from './sections/Contact';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import StickyNav from './components/StickyNav';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-primary text-white font-sans selection:bg-accent selection:text-black">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        
        <StickyNav />
        <LanguageToggle />
        
        <main id="main-content">
          <Hero />
          <About />
          <Research />
          <Teaching />
          <Contact />
        </main>
        
        <BackToTop />
      </div>
    </LanguageProvider>
  );
}

export default App;
