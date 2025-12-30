import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling with Lenis would be initialized here
    // For now, using native smooth scroll via CSS in index.css
    
    // Optional: Add custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'hidden lg:block fixed w-4 h-4 rounded-full border-2 border-hydro-cyan pointer-events-none z-50 mix-blend-difference';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <Mission />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
