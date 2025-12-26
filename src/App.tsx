import Hero from './sections/Hero';
import About from './sections/About';
import Teaching from './sections/Teaching';
import Contact from './sections/Contact';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageToggle from './components/LanguageToggle';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-primary text-white font-sans selection:bg-accent selection:text-black">
        <LanguageToggle />
        <main>
          <Hero />
          <About />
          <Teaching />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
