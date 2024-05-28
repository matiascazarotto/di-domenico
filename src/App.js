import React, { useRef } from 'react';
import Header from './components/Header';
import FullScreenBackground from './components/FullScreenBackground';
import Biography from './components/Biography';
import SoundCloudSection from './components/SoundCloudSection';
import GlobalStyles from './styles/globalStyles';
import Contact from './components/Contact';
import SpotifySection from './components/SpotifySection';
import FreakncSection from './components/FreakncSection';
import Author from './components/Author';
import Presspack from './components/Presspack';


function App() {
  const presspackRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToPresspack = () => {
    presspackRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };



  const PresspackScroll = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <Presspack />
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
      <Header scrollToPresspack={scrollToPresspack} scrollToHome={scrollToHome}/>
      <FullScreenBackgroundScroll ref={homeRef} /> 
      <Biography />
      <FreakncSection />
      <SoundCloudSection />
      <SpotifySection />
      <PresspackScroll ref={presspackRef} />
      <Contact />
      <Author />
    </>
  );
}

export default App;