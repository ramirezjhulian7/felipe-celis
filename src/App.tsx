import Hero from './sections/Hero';
import About from './sections/About';
import Teaching from './sections/Teaching';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white font-sans selection:bg-accent selection:text-black">
      <main>
        <Hero />
        <About />
        <Teaching />
        <Contact />
      </main>
    </div>
  );
}

export default App;
