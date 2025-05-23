import React from 'react'
import Destination from './components/Destination';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
          <>
            <Navbar />
            <main>
              <Hero />
              <Destination />
              <About />
              <Contact />
            </main>
            <Footer />
          </>
        );
      }
export default App