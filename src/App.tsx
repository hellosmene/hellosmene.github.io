import React from 'react';
import Navbar from './components/common/Navbar';

/* Pages */
import AboutMe from './pages/AboutMe';
import Skills from 'pages/Skills';
import Projects from 'pages/Projects';
import Contacts from 'pages/Contacts';
import Footer from 'pages/Footer';

function App() {
  return (
    <div className='pt-5'>
      <Navbar />
      <main className='flex flex-col gap-12'>
        <AboutMe />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}

export default App;
