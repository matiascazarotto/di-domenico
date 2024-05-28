import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import FullScreenBackground from './components/FullScreenBackground';
import Biography from './components/Biography';
import SoundCloudSection from './components/SoundCloudSection';
import GlobalStyles from './styles/globalStyles';
import Contact from './components/Contact';
import SpotifySection from './components/SpotifySection';
import FreakncSection from './components/FreakncSection';
import Author from './components/Author';


function App() {
  const biographyRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToBiography = () => {
    biographyRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };



  const BiographyScroll = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <Biography />
      </div>
    );
  });

  const ContactScroll = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <Contact />
      </div>
    );
  });

  const FullScreenBackgroundScroll = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <FullScreenBackground />
      </div>
    );
  });


  
  return (
    <>
      <GlobalStyles />
      <Header scrollToAbout={scrollToBiography} scrollToContact={scrollToContact} scrollToHome={scrollToHome}/>
      <FullScreenBackgroundScroll ref={homeRef} /> 
      <BiographyScroll ref={biographyRef} />
      <FreakncSection />
      <SoundCloudSection />
      <SpotifySection />
      <ContactScroll ref={contactRef} />
      <Author />
    </>
  );
}

export default App;